import React from 'react';
import AppStore from '../assets/images/images/App-Store.svg';
import GooglePlay from '../assets/images/images/Google-Play.svg';
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
              <a className="btn-app" href="#"><img src={AppStore} alt="App-store button" /></a>
              <a className="btn-app" href="#"><img src={GooglePlay} alt="Google-play button" /></a>
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