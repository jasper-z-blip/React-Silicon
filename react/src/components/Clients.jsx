import React, {useState, useEffect} from 'react';
import Review from './Review';

const Clients = () => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setReviews(data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <section id="clients">
        <div className="our-app">
          <h2>Clients are<br /> Loving Our App</h2>
        </div>

        <div className='review-box'>
          <div className='testimonials'>

            {
              reviews.map((review) => (<Review key={review.id} item={review}/>))
            }

          </div>
        </div>

        
    </section>
  );
};

export default Clients;