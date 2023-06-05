import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './QuoteDetails.css'
import QuoteCard from '../components/QuoteCard';

const QuoteDetails = (props) => {

  const params = useParams();
  console.log(params.id);
  const [quotes, setQuotes] = useState({});
  const key = Math.floor(Math.random() * 1000)

  useEffect(() => {
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
  }, []);
    

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
      <Link to={'/quote/:id/secondpage'}>
      <button>Second page</button>
      </Link>
      <Link to={`/quote/${params.id}/editquote`}>
      <button>Edit this quote</button>
      </Link>
    </div>
  )
}

export default QuoteDetails
