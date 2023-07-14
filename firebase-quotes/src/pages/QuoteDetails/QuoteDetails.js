import React, { useEffect, useState } from "react";
import "./QuoteDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { deleteQuote, getQuoteById } from "../../firebase";

function QuoteDetails() {
  const params = useParams();
  const [quote, setQuote] = useState({});
  const navigate = useNavigate();

  const getQuoteData = () => {
    getQuoteById(params.id)
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getQuoteData();
  }, [])

  // const likeHandler = () => {
  //   fetch("https://js-course-server.onrender.com/quotes/like/" + params.id, {
  //     method: "PATCH",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuote(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  

  return (
    <div className="quote-details">
      <div className="quote-details-card">
        <h3>
          <i>{quote.quoteText}</i>
        </h3>
        <p>
          <b>
            <i>{quote.quoteAuthor}</i>
          </b>
        </p>
        <p>{quote.quoteSource}</p>
        <p className="likes">Likes: {quote.likes}</p>
        {/* <button onClick={likeHandler}>Like</button> */}
        <button onClick={() => navigate(`/quote/${params.id}/edit`)}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default QuoteDetails;
