import React from 'react';
import { Link } from 'react-router-dom';
import mapImage from '../assets/images/images/map.svg';

const ContactPage = () => {
  return (
    <div>
      <ContactInfo />
      <LocationInfo />
    </div>
  );
};

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="contact-container-2">
        <div className="link-box">
          <NavLink iconClass="fa-house" label="Homepage" to="/" />
          <NavLink iconClass="fa-hand-point-right" label="Contact" to="/contact" />
        </div>
        <div>
          <h1>Contact us!</h1>
        </div>

        <InfoCard
          iconClass="fa-envelope"
          title="Email us"
          description="Please feel free to drop us a line. We will respond as soon as possible."
          buttonText="Leave a message"
          buttonIcon="fa-arrow-right"
        />

        <InfoCard
          iconClass="fa-business-time"
          title="Careers"
          description="Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum."
          buttonText="Send an application"
          buttonIcon="fa-arrow-right"
        />
      </div>
    </section>
  );
};

const LocationInfo = () => {
  return (
    <section id="find-here">
      <div className="contact-container-3">
        <div className="map">
          <img className="img-map" src={mapImage} alt="Map to find the way." />
          <i className="fa-solid fa-location-dot location-icon"></i>
          <i className="fa-solid fa-location-dot location-icon-2"></i>
        </div>

        <div className="medical-center1">
          <MedicalCenter
            name="Medical Center 1"
            address="4517 Washington Ave. Manchester, Kentucky 39495"
            phone="(406) 555-0120"
            hours="Mon – Fri: 9:00 am – 10:00 pm Sat – Sun: 9:00 am – 08:00 pm"
          />
        </div>

        <div className="medical-center2">
          <MedicalCenter
            name="Medical Center 2"
            address="2464 Royal Ln. Mesa, New Jersey 45463"
            phone="(406) 544-0123"
            hours="Mon – Fri: 9:00 am – 10:00 pm Sat – Sun: 9:00 am – 08:00 pm"
          />
        </div>

        <SocialMediaLinks />
        <ConsultationForm />
      </div>
    </section>
  );
};

const NavLink = ({ iconClass, label, to }) => {
  return (
    <nav className="nav-bar-2">
      <i className={`fa-solid ${iconClass}`}></i>
      <Link className="nav-link-2" to={to}>{label}</Link>
    </nav>
  );
};

const InfoCard = ({ iconClass, title, description, buttonText, buttonIcon }) => {
  return (
    <div className="info-card">
      <button className="icon-button">
        <i className={`fa-regular ${iconClass}`}></i>
      </button>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="action-button">
        {buttonText} <i className={`fa-solid ${buttonIcon}`}></i>
      </button>
    </div>
  );
};

const MedicalCenter = ({ name, address, phone, hours }) => {
  return (
    <div className="medical-center">
      <h2>{name}</h2>
      <div className="location">
        <i className="fa-solid fa-location-dot"></i>
        <p>{address}</p>
      </div>
      <div className="phone">
        <i className="fa-solid fa-phone fa-shake"></i>
        <p>{phone}</p>
      </div>
      <div className="clock">
        <i className="fa-regular fa-clock"></i>
        <p>{hours}</p>
      </div>
    </div>
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="button">
        <i className="fa-brands fa-square-facebook fa-2x"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="button">
        <i className="fa-brands fa-twitter fa-2x"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="button">
        <i className="fa-brands fa-instagram fa-2x"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="button">
        <i className="fa-brands fa-youtube fa-2x"></i>
      </a>
    </div>
  );
};

const ConsultationForm = () => {
  return (
    <div className="floating-box">
      <h2>Get Online Consultation</h2>
      <p className='enter-paragraph'>Full name</p>
      <input type="text" className="input-name" placeholder="Enter your name" />
      <p className='enter-paragraph'>Email address</p>
      <input type="email" className="input-email" placeholder="Enter your email" />
      <p className='enter-paragraph'>Specialist</p>
      <input type="text" className="input-spec" placeholder="Specialist's name" />
      <button className="btn-make">Make an appointment</button>
    </div>
  );
};

export default ContactPage;