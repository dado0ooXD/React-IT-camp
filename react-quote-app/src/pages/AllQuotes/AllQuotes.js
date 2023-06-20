import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard";
import { Link, useParams, useNavigate } from "react-router-dom";
import { authSlice } from '../../store/authSlice';
import { quoteSlice } from "../../store/quoteSlice";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [fav, setFav] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        // console.log(data)
      });
    console.log(quoteSlice.getInitialState())
  }, []);

  // console.log(quotes);

  // ADD TO FAVOURITES



  const addToFavourites = (id) => {
    fetch("https://js-course-server.onrender.com/quotes/get-quote/" + id )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.likes)
      // setQuotes(data);
      dispatch(quoteSlice.actions.setFavourites(data));
      console.log(data)
    })
    .catch((error) => {
      console.log("Error", error);  
    });
    // console.log(params)
  }
  

  return (
    <div>
      {authState.id ? (
        <button onClick={() => {
          dispatch(authSlice.actions.logout())
        }}>
          Logout
    </button>
      ) : (
          <button onClick={() => {navigate("/login")}}>
            Login
          </button>
    )}
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
            <button onClick={() => {addToFavourites(item._id)}}>Add to favourites</button>
          </div>
        );
      })}
    </div>
  );
};

export default AllQuotes;
