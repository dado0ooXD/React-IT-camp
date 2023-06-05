import React, { useState, useEffect } from "react";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard";
import {Link, useParams} from 'react-router-dom'

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  console.log(quotes);

  const likeHandler = () => {
    fetch("https://js-course-server.onrender.com/quotes/like/" + params.id, {
      method: "PATCH"
    })
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }

  return (
      <div>
      {quotes.map((item) => {
        return <div>
            <QuoteCard
            key={Math.floor(Math.random() * 1000)}
          author={item.quoteAuthor}
          source={item.quoteSource}
            quote={item.quoteText}
            likes = {item.likes}
        />
        <Link  to={"/quote/" + item._id }>
      <button>Click</button>
          </Link>
          <button onClick={likeHandler}>
            Like
          </button>
          </div>
      })}
    </div>
  );
};

export default AllQuotes;
