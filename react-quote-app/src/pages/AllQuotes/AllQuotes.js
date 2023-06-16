import React, { useState, useEffect } from "react";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard";
import { Link, useParams, useNavigate } from "react-router-dom";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

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
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("auth_token");
        }}
      >
        Log Out
      </button>
      {quotes.map((item, index) => {
        return (
          <div>
            <QuoteCard
              key={index}
              author={item.quoteAuthor}
              source={item.quoteSource}
              quote={item.quoteText}
              likes={item.likes}
            />
            <Link to={"/editquote/" + item._id}>
              <button
              // onClick={() => {
              //   navigate("/editquote/" + item._id + "")
              // }}
              >
                Edit quote
              </button>
            </Link>
            <Link to={"/quote/" + item._id}>
              <button>View this quote</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllQuotes;
