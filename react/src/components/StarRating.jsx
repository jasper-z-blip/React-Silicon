import React from 'react';
import FullStar from '../assets/images/images/full-star.svg';
import EmptyStar from '../assets/images/images/empty-star.svg';

const StarRating = ({ starRating = 0 }) => {
  const maxStars = 5;
  const filledStars = Math.min(Math.max(Math.floor(starRating), 0), maxStars);
  const emptyStars = maxStars - filledStars;

  return (
    <div className="star-rating" aria-label={`Rating: ${starRating} out of ${maxStars}`}>
      {Array.from({ length: filledStars }).map((_, index) => (
        <img key={`filled-${index}`} src={FullStar} alt="A yellow star" />
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <img key={`empty-${index}`} src={EmptyStar} alt="An empty star" />
      ))}
    </div>
  );
};

export default StarRating;