
import React from 'react';
import AppStoreDark from '../assets/images/images/appstore-dark.svg';
import GooglePlayDark from '../assets/images/images/googleplay-dark.svg';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <a
        className="appstore-button"
        href="https://www.apple.com/se/app-store/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="app-store-btn">
          <img src={AppStoreDark} alt="App Store logo" />
        </button>
      </a>

      <a
        className="google-button"
        href="https://play.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="google-play-btn">
          <img src={GooglePlayDark} alt="Google Play logo" />
        </button>
      </a>
    </div>
  );
};

export default Buttons;
