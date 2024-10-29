import React, { useState } from 'react';
import BellIcon from '../assets/images/images/bell.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Hjälp av chatGPT med att veta hur man skulle kunna validera att det är en emailadress.

    if (!emailRegex.test(email)) {
      setError('Enter a valid email address.');
      setIsSubscribed(false);
    } else {
      setError('');
      console.log("Subscribed with email:", email);
      setEmail('');
      setIsSubscribed(true);
    }
  };

  return (
    <section id="subscribe">
      <div className="box-7">
        <div className="section-7">
          <div className="yellow-bell-2">
            <img src={BellIcon} alt="Yellow bell" />
            <h2>Subscribe to our newsletter to stay<br /> informed about latest updates!</h2>
          </div>

          <div className="yellow-bell">
            <img src={BellIcon} alt="Yellow bell" />
            <h2>Subscribe to<br /> our newsletter!</h2>
          </div>

          <div className="input-box">
            <div className="input-container">
              <i className="fa-regular fa-envelope"></i>
              <input 
                className="mail-box" 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn-4" onClick={handleSubscribe}>
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
