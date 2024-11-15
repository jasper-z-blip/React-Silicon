import React from 'react';
import StarRating from './StarRating';
import QuotesBluebox from '../assets/images/images/quotes-bluebox.svg';

const Review = ({ starRating, author, jobRole, avatarUrl, comment }) => {
  return (

    <div className="review">
      <div className='quote'>
          <img src={QuotesBluebox} alt="Quotes in a blubox" />
      </div>
      <div className="review-details">
        <StarRating starRating={starRating} />
        <p className="comment">{comment}</p>

        <img src={avatarUrl} alt={`${author}'s avatar`} className="avatar" />
        <h3>{author}</h3>
        <p className="job-role">{jobRole}</p>
      </div>
      
    </div>
  );
};

export default Review;
