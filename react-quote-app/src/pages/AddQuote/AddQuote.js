import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import "./AddQuote.css";

const AddQuote = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("hardkodirano");
  // const [categories, setCategories] = useState([]);

  const addQuote = {
    quoteText: text,
    quoteSource: source,
    quoteAuthor: author,
    category: category,
  };

  // useEffect(() => {
  //   fetch("https://js-course-server.onrender.com/category/get-all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCategories(data);
  //     });
  // }, []);

  const addNewQuote = () => {
    fetch("https://js-course-server.onrender.com/quotes/add-quote", {
      method: "POST",
      body: JSON.stringify(addQuote),
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("auth_token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Citat je uspesno dodat!");
        navigate("/");
      })
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div className="main">
      <input
        name="quoteText"
        placeholder="Quote Text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      />
      <input
        name="quoteAuthor"
        placeholder="Quote Author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        name="quoteSource"
        placeholder="Quote Source"
        onChange={(e) => {
          setSource(e.target.value);
        }}
      />

      <button
        className="addquote-btn"
        onClick={addNewQuote}
        disabled={text === "" || author === "" || source === ""}
      >
        Add Quote
      </button>
    </div>
  );
};

export default AddQuote;
