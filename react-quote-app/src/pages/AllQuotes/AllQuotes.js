import React, { useState, useEffect } from "react";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard";
import {Link} from 'react-router-dom'

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  console.log(quotes);

  return (
      <div>
      {quotes.map((item) => {
        return <div>
            <QuoteCard
            key={Math.floor(Math.random() * 1000)}
          author={item.quoteAuthor}
          source={item.quoteSource}
          quote={item.quoteText}
        />
        <Link  to={"/quote/" + item._id }>
      <button>Click</button>
      </Link>
          </div>
      })}
    </div>
  );
};

export default AllQuotes;
