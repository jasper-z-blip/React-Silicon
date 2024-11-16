import React from 'react';
import TwoPhones from '../assets/images/images/two-phones.svg';
import ButtonsMain from './ButtonsMain';

const Main = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1 className="h1-hero">Manage All Your<br /> Money in One App</h1>
        </div>

        <div className="content">
          <p className="save-text">
            We offer you a new generation of mobile banking.<br />
            Save, spend & manage money in your pocket.
          </p>

          <ButtonsMain />

          <div className="all-discover">
            <a href="#" className="discover-more">
              <span className="btn-circle">
                <i
                  className="fa-solid fa-chevron-down"
                  style={{ color: 'var(--color-chevron)' }}
                ></i>
              </span>
              <span className="disc-more">Discover more</span>
            </a>
          </div>
        </div>

        <div className="images">
          <img
            className="two-phones"
            src={TwoPhones}
            alt="Mobilephones showing transactions"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
