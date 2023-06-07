import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import './Edit.css'


const Edit = () => {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);
    const [quote, SetQuote] = useState([]);
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const editQuote = () => {
        const newQuote = {
            quoteText: text,
            quoteSource: quote.source,
            quoteAuthor: author
        }

        fetch("https://js-course-server.onrender.com/quotes/edit/" + params.id, {
      method: "PATCH",
      body: JSON.stringify(newQuote),
      headers: {
        "Content-Type": "application/json",
        // authorization:
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IjYzZDQyMTM5OWZhZjUyMDAzNDFmYzE1NSIsImZ1bGxOYW1lIjoiVGVzdCIsImlzQWRtaW4iOmZhbHNlLCJpc0d1ZXN0IjpmYWxzZSwiaWF0IjoxNjg1OTg3NjM0LCJleHAiOjE3MTc1MjM2MzR9.oiaPjkSZC3YE9mIzguobRvD89233KTyaknavqDbn85A",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Uspesno ste editovali citat");
        navigate("/");
      })
      .catch(() => {
        alert("error");
      });
    }

    const getQuotes = () => {
        fetch(
          "https://js-course-server.onrender.com/quotes/get-quote/" + params.id + ""
        )
          .then((res) => res.json())
          .then((data) => {
            SetQuote(data);
            setAuthor(data.quoteAuthor);
            setText(data.quoteText);
    
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
    };
    
    useEffect(() => {getQuotes()},[])

  return (
    <div className='main'>
          <input placeholder='text' value={text}
              onChange={(e) => {
                setText(e.target.value);
              }} />
          <input placeholder='author'  value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }} />

          <button onClick={editQuote}>Edit</button>
    </div>
  )
}

export default Edit
