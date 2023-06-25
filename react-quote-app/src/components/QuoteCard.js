import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './QuoteCard.css';
import { quoteSlice } from '../store/quoteSlice';

const QuoteCard = (props) => {
    const dispatch = useDispatch();
    const quote = props.prop;
    const authState = useSelector((state) => state.quote);
    const quoteState = useSelector((state) => state.quote)


    const addToFavorites = () => {
        dispatch(quoteSlice.actions.setFavourites(quote))
    };

    const reportQuote = () => {
        const reportMessage = prompt("Enter report message");
        const reportObject = {
            quote: quote,
            reportMessage: reportMessage,
            user: {
              fullName: authState.fullName,
              id: authState.id, 
            },
        };
        dispatch(quoteSlice.actions.addReport(reportObject));
        console.log(quoteState.reports)
        console.log(authState)
    }
    
 
    return (
        <>
            <div className='quote-card'>
                <h1>Quote: ---{props.quote}</h1>
                <h2>Author: ---{props.author}</h2>
                <p>Source: ---{props.source}</p>
                <h6>likes: {props.likes}</h6>
                <button onClick={addToFavorites}>Add to faviorites</button>
                <button onClick={reportQuote}>Report this quote</button>
            </div>
        </>

      
  )
}

export default QuoteCard;
