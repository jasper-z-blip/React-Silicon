import React from 'react';
import { Link } from 'react-router-dom';
import mapImage from '../assets/images/images/map.svg';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

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
      <a
        href="https://www.google.com/maps/search/4517+Washington+Ave.+Manchester,+Kentucky+39495/@37.1536371,-83.7644756,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
        rel="noopener noreferrer"
        target="_blank">
        <i className="fa-solid fa-location-dot"></i>
      </a>
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
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleOk = () => {
    setSubmitted(false);
    reset();
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      if (res.status === 201) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {//Hjälp chatGPT
      console.error("Error submitting form: ", error);
      alert("The form could not be submitted. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <div className="contact-box">
        <h1>Thank you for your message! </h1>
        <p>We will get back to you as soon as possible.</p>
        <button className="ok-btn" onClick={handleOk}>OK</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="floating-box">
        <h2>Get online consultation</h2>
        <p className='enter-paragraph'>Full name</p>
        <input
        className="name-input"
        type="text"
        placeholder="Full name"
        {...register('name', {
          required: 'This field is required.',
          pattern: {
            value: /^[a-zA-ZÀ-ÿ]{2,}(?:[´-]?[a-zA-ZÀ-ÿ]+)*(?: [a-zA-ZÀ-ÿ]{2,}(?:[´-]?[a-zA-ZÀ-ÿ]+)*)+$/,
            message: 'Please enter at least a first name and a last name with a minimum of 2 characters each.'
          }
        })}
      />
      {errors.name && <p className="error-message">{errors.name.message}</p>}

        <p className='enter-paragraph'>E-mail</p>
        <input className='email-input' 
          type="email" 
          placeholder="E-mail" 
          {...register('email', { 
            required: 'This field is required.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please enter a valid email address. Example of valid email adress: jasper@domain.se'
            }
          })} 
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
        
        <p className='enter-paragraph'>Specialist</p>
        <input className='spec-input'
          type="text" 
          placeholder="Specialist" 
          {...register('specialist', { required: 'This field is required.',
            required: 'This field is required.',
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: 'Only letters and spaces are allowed.'
            },
            minLength: {
              value: 2,
              message: 'The name must be at least 2 characters long.'
            }
           })} 
        />
        {errors.specialist && <p className="error-message">{errors.specialist.message}</p>}
        
        <button type="submit" className="btn-make">Book an appointment</button>
      </div>
    </form>
  );
};

export default ContactPage;