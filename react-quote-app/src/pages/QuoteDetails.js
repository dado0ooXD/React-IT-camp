import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './QuoteDetails.css'
import QuoteCard from '../components/QuoteCard';

const QuoteDetails = (props) => {

  const params = useParams();
  console.log(params.id);
  const [quotes, setQuotes] = useState({});
  const key = Math.floor(Math.random() * 1000)

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

  return (
    <div className='quote-details'>
      <QuoteCard
        key={key}
          author={quotes.quoteAuthor}
          source={quotes.quoteSource}
        quote={quotes.quoteText}
        likes = {quotes.likes}
      />
      <Link to={"/"}>
      <button>Back on all quotes</button>
      </Link>
      <button onClick={likeHandler}
      >Like</button>
      
    </div>
  )
}

export default QuoteDetails
