import React, { useEffect, useState } from 'react';
import Review from './Review';

const Clients = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
      if (!res.ok) throw new Error('Failed to fetch reviews');
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section id="clients">
      <div className="our-app">
        <h2>Clients are<br /> Loving Our App</h2>
      </div>

      <div className="review-box">
        <div className="testimonials">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Review
                key={review.id}
                starRating={review.starRating}
                author={review.author}
                jobRole={review.jobRole}
                avatarUrl={review.avatarUrl}
                comment={review.comment}
              />
            ))
          ) : (
            <p>Loading reviews...</p>//Förslag från chatGPt, hade tanke att implementera att det skulle laddas men hann ej.
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
