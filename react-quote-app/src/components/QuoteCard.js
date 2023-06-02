import React from 'react';
import './QuoteCard.css'
import {Link} from 'react-router-dom'

const QuoteCard = (props) => {


  return (
      <Link>
      <div className='quote-card'>
          <h1>Quote: ---{props.quote}</h1>
          <h2>Author: ---{props.author}</h2>
          <p>Source: ---{props.source }</p>
          </div>
      </Link>
  )
}

export default QuoteCard;
