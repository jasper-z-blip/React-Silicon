import React, { useState } from 'react';
import BellIcon from '../assets/images/images/bell.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
      setError('Please enter your email address.');
      setIsSubscribed(false);
      return;
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setIsSubscribed(false);
      return;
    }

    setIsLoading(true);
    setError('');
    console.log("Subscribed with email:", email);

    setTimeout(() => {
      setEmail('');
      setIsSubscribed(true);
      setSubmitted(true);
      setIsLoading(false);
    }, 2000); // Simulate an API call delay
  };

  if (submitted) {
    return (
      <div className="subsbox">
        <h1>Thank you for subscribing!</h1>
        <p>Check your email for more information.</p>
        <button className="ok-btn" onClick={() => setSubmitted(false)}>OK</button>
      </div>
    );
  }

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
            <form onSubmit={handleSubscribe}>
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
              <button className="btn-4" type="submit" disabled={isLoading}>
                {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>
            {error && <p id="email-error" className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
