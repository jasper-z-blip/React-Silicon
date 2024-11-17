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

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === '') {
      setError('Please enter your email address.');
      setIsSubscribed(false);
      return;
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setIsSubscribed(false);
      return;
    }else (email)

    setIsLoading(true);
    setError('');
    console.log("Subscribed with email:", email);

    setTimeout(() => { //Hjälp av chatGPT
      setEmail('');
      setIsSubscribed(true);
      setSubmitted(true);
      setIsLoading(false);
    }, 2000);
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

          <form onSubmit={handleSubscribe}>
            <div className="input-box">
              <i className="fa-regular fa-envelope"></i>
              <input 
                className="mail-box" 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn-4" type="submit" disabled={isLoading}>
                {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
            {error && <p id="email-error" className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;