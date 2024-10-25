import React from 'react';
import AppStore from '../assets/images/images/App-Store.svg'; // Adjust the path as per your project structure
import GooglePlay from '../assets/images/images/Google-Play.svg';
import WhiteAppStore from '../assets/images/images/white-appstore.svg';
import WhiteGooglePlay from '../assets/images/images/white-google.svg';
import AppStoreDesktopDark from '../assets/images/images/appstore-desktop-dark.svg';
import GooglePlayDesktopDark from '../assets/images/images/googleplay-desktop-dark.svg';
import MobileFront from '../assets/images/images/mobile-front.svg';
import MobileBack from '../assets/images/images/mobile-back.svg';
import ImageFrontDesktop from '../assets/images//images/image-front-desktop.svg';

const Main = () => {
  return (
    <main>
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

            <div className="buttons-dark" style={{ display: 'none' }}>
              <img className="btn-app-2" src={WhiteAppStore} alt="App-store button" />
              <img className="btn-app-2" src={WhiteGooglePlay} alt="Google-play button" />
            </div>

            <div className="buttons-desktop">
              <a className="btn-app-3" href="#"><img src={AppStoreDesktopDark} alt="App-store button" /></a>
              <a className="btn-app-3" href="#"><img src={GooglePlayDesktopDark} alt="Google-play button" /></a>
            </div>

            <div className="buttons-desktop-dark" style={{ display: 'none' }}>
              <img className="btn-app-4" src={AppStoreDesktopDark} alt="App-store button" />
              <img className="btn-app-4" src={GooglePlayDesktopDark} alt="Google-play button" />
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
            <img className="img-front-desktop" src={ImageFrontDesktop} alt="Mobilephone showing transactions" />
            <img className="img-front" src={MobileFront} alt="Mobilephone showing transactions" />
            <img className="img-back" src={MobileBack} alt="Mobilephone showing budget" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;