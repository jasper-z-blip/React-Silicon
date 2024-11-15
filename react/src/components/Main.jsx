import React from 'react';

import TwoPhones from '../assets/images/images/two-phones.svg';


const Main = () => {
  return (
      <section id="hero">
        <div className="container">
          <div className="headline">
            <h1 className="h1-hero">Manage All Your<br/> Money in One App</h1>
          </div>

          <div className="content">
            <p className="save-text">
              We offer you a new generation of mobile banking.<br />
              Save, spend & manage money in your pocket.
            </p>

            <div className="buttons">
              <div className='app-store-btn'>
                <p className='download'>Download on the</p>
                <a className="a-app-store" href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                  App Store
                </a>
              </div>

              <div>
                <a className="google-button" href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                  Google Play
                </a>
              </div>
            </div>


            <div className="all-discover">
              <a href="#" className="discover-more">
                <span className="btn-circle">
                  <i className="fa-solid fa-chevron-down" style={{ color: 'var(--color-chevron)' }}></i>
                </span>
                <span className="disc-more">Discover more</span>
              </a>
            </div>
          </div>


          <div className="images">
            <img className="two-phones" src={TwoPhones} alt="Mobilephones showing transactions" />
          </div>
        </div>
      </section>
  );
};

export default Main;