import React from 'react'
import FullStar from '../assets/images/images/full-star.svg';
import EmptyStar from '../assets/images/images/empty-star.svg';

const StarRating = (starRating) => {
  const maxStars = 5;
  const filledStars = Math.min(starRating, maxStars)
  const emptyStars = maxStars -filledStars;
  return (
    <div className='star-rating'>
      {
        [...Array(filledStars)].map((_, index) => (<img key={index} src={FullStar} alt="A yellow star" />))
      }

      {
        [...Array(emptyStars)].map((_, index) => (<img key={index} src={EmptyStar} alt="An empty star" />))
      }

    </div>
  )
}

export default StarRating