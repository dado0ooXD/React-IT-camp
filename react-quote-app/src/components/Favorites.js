import React from 'react';
import './Favorites.css';

import { useSelector, useDispatch } from 'react-redux';

const Favorites = () => {
  const quoteState = useSelector((state) => state.quote);
  const favorites = quoteState.favourites;
  console.log(favorites)

  return (
    <div className='main-favorite'>
      {favorites.map((item, index) => {
        return <div className='favorite-card'>
          <h4>Quote Text: {item.quoteText }</h4>
          <h4>Quote Author: { item.quoteAuthor}</h4>
          <h4>Quote Source: { item.quoteSource}</h4>
      </div>
      })}
    </div>
  )
}

export default Favorites
