import React from 'react';
import { useDispatch } from 'react-redux';
import './QuoteCard.css';
import { quoteSlice } from '../store/quoteSlice';


const QuoteCard = (props) => {
    const dispatch = useDispatch();
    const quote = props.prop;
    const addToFavorites = () => {
     dispatch(quoteSlice.actions.setFavourites(quote))
    }

    return (
        <>
            <div className='quote-card'>
                <h1>Quote: ---{props.quote}</h1>
                <h2>Author: ---{props.author}</h2>
                <p>Source: ---{props.source}</p>
                <h6>likes: {props.likes}</h6>
                <button onClick={addToFavorites}>Add to faviorites</button>
            </div>
        </>

      
  )
}

export default QuoteCard;
