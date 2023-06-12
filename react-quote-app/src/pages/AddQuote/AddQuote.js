import React, {  useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const AddQuote = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const  [category, setCategory ] = useState("hardkodirano");

        const addQuote = {
            quoteText: text,
            quoteSource: source,
            quoteAuthor: author,
            category: category,
    };
    
    const addNewQuote = () => {
        fetch("https://js-course-server.onrender.com/quotes/add-quote", {
            method: "POST",
            body: JSON.stringify(addQuote),
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("auth_token")
            },
        })
            .then((response) => response.json())
            .then((data) => {
                    console.log(data)
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
                name='quoteText'
                placeholder="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    console.log(text)
                }}
            />
            <input
                name='quoteAuthor'
                placeholder="author"
                value={author}
                onChange={(e) => {
                    setAuthor(e.target.value);
                }}
            />
            <input
                name='quoteSource'
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
