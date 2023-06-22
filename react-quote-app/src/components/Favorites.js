import React from 'react';
import './Favorites.css';
import { quoteSlice } from '../store/quoteSlice';

import { useSelector, useDispatch } from 'react-redux';

const Favorites = () => {
  const quoteState = useSelector((state) => state.quote);
  const favorites = quoteState.favourites;
  const dispatch = useDispatch();
  console.log(favorites)

  const removeQuote = () => {
    dispatch(quoteSlice.actions.clearFavourites());
  }

  return (
    <div className='main-favorite'>
      {favorites.map((item, index) => {
        return <div className='favorite-card'>
          <p>Quote Text: <span className='text'>{item.quoteText }</span></p>
          <p>Quote Author: <span className='text'>{ item.quoteAuthor}</span></p>
          <p>Quote Source: <span className='text'>{item.quoteSource}</span></p>
          <button onClick={removeQuote}>Remove from favorite</button>
      </div>
      })}
    </div>
  )
}

export default Favorites
