import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './QuoteDetails.css'
import QuoteCard from '../components/QuoteCard';

const QuoteDetails = (props) => {

  const params = useParams();;
  const navigate = useNavigate();
  console.log(params.id);
  const [quotes, setQuotes] = useState({});
  const key = Math.floor(Math.random() * 1000)


  // GET QUOTE
  const getQuotes = () => {
    fetch("https://js-course-server.onrender.com/quotes/get-quote/" + params.id)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.likes)
      setQuotes(data);
      
    })
    .catch((error) => {
      console.log("Error", error);  
    });
}
 

  useEffect(() => {
    getQuotes();
  }, []);

  // LIKE QUOTE
    
  const likeHandler = () => {
    fetch(
      "https://js-course-server.onrender.com/quotes/like/" +
        params.id ,
      {
        method: "PATCH",
      }
    )
      .then(res => {
        getQuotes();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // DELETE QUOTE

  const deleteQuote = () => {
      fetch("https://js-course-server.onrender.com/quotes/delete/" + params.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("auth_token")
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/");
        })
      console.log(params)
  }
  
  // ------------------------------------------------

  return (
    <div className='quote-details'>
      <QuoteCard
        key={key}
          author={quotes.quoteAuthor}
          source={quotes.quoteSource}
        quote={quotes.quoteText}
        likes = {quotes.likes}
      />
      <button onClick={deleteQuote}>Delete</button>
      <Link to={"/"}>
      <button>Back on all quotes</button>
      </Link>
      <button onClick={likeHandler}
      >Like</button>
      
    </div>
  )
}

export default QuoteDetails
