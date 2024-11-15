import React from 'react'
import StarRating from './StarRating'
import QuotesBluebox from '../assets/images/images/quotes-bluebox.svg';

const Review = ({item}) => {
  return (
    <div className="reviews">
        <div className='citattecken-1'>
          <img src={QuotesBluebox} alt="Quotes in a blubox" />
        </div>
        
        <StarRating StarRating={item.starRating} />

        <p>{item.comment}</p>
        <div className='img-name-1'>
          <img src={item.avatarUrl} alt="An avatar of the author" />
          <div className='test-text'>
            <h3>{item.author}</h3>
            <p>{item.jobRole}</p>
          </div>
        </div>
    </div>
  )
}

export default Review