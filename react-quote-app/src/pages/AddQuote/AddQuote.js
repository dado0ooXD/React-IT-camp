import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const AddQuote = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [source, setSource] = useState("");

    const addNewQuote = () => {
        const newQuote = {
            quoteText: text,
            quoteSource: source,
            quoteAuthor: author,
        };

        fetch("https://js-course-server.onrender.com/quotes/add-quote", {
            method: "POST",
            body: JSON.stringify(newQuote),
            headers: {
                "Content-Type": "application/json",
                authorization: `${process.env.REACT_APP_TOKEN_KEY}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
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
                    setSource(e.target.value);
                }}
            />

            <button onClick={addNewQuote}>Add</button>
        </div>
    )
}

export default AddQuote;
