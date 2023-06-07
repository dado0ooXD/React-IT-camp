import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./Edit.css";

const Edit = () => {
  const params = useParams();
    const navigate = useNavigate();
    
  const [quote, SetQuote] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [source, setSource] = useState("");

  const editQuote = () => {
    const newQuote = {
      quoteText: text,
      quoteSource: source,
      quoteAuthor: author,
    };

    fetch("https://js-course-server.onrender.com/quotes/edit/" + params.id, {
      method: "PATCH",
      body: JSON.stringify(newQuote),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Citat je uspesno editovan!");
        navigate("/");
      })
      .catch(() => {
        alert("error");
      });
  };

  return (
    <div className="main">
      <input
        placeholder="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        placeholder="author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input
        placeholder="source"
        onChange={(e) => {
          setSource(e.target.value  );
        }}
      />

      <button onClick={editQuote}>Edit</button>
    </div>
  );
};

export default Edit;
