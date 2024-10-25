import React from 'react';
import BellIcon from '../assets/images/images/bell.svg'; // Adjust the path as needed

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="box-7">
        <div className="section-7">
          {/* Desktop view */}
          <div className="yellow-bell-2">
            <img src={BellIcon} alt="Yellow bell" />
            <h2>Subscribe to our newsletter to stay<br /> informed about latest updates!</h2>
          </div>

          {/* Mobile view */}
          <div className="yellow-bell">
            <img src={BellIcon} alt="Yellow bell" />
            <h2>Subscribe to<br /> our newsletter!</h2>
          </div>

          {/* Input section */}
          <div className="input-box">
            <div className="input-container">
              <i className="fa-regular fa-envelope"></i>
              <input className="mail-box" type="text" placeholder="Your email" />
            </div>
            <button className="btn-4">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;