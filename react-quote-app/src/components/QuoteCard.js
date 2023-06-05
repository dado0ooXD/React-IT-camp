import React from 'react';
import './QuoteCard.css';


const QuoteCard = (props) => {

    

    return (
        <>
            <div className='quote-card'>
                <h1>Quote: ---{props.quote}</h1>
                <h2>Author: ---{props.author}</h2>
                <p>Source: ---{props.source}</p>
                <h6>likes: { props.likes}</h6>
            </div>
        </>

      
  )
}

export default QuoteCard;
