import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Importera Link här
import Logotype from '../assets/images/images/Silicon-logo.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link id="logo" to="/">
          <img src={Logotype} alt="Silicon logga" />
        </Link>

        <nav id="navigation" className="nav-bar">
          <NavLink className="nav-link" to="/features">Features</NavLink>
          <NavLink className="nav-link-2" to="/contacts">Contact</NavLink>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="sign-in" href="#" className="btn-1">
          <i className="fa-thin fa-user fa-bounce" style={{ color: 'white' }}></i>
          <span style={{ color: 'white' }}>Sign In / Up</span>
        </a>

        <button className="mobile-menu">
          <i className="fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
