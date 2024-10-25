import React from 'react';
import SummersReview from '../assets/images/images/summers.svg';
import FloresReview from '../assets/images/images/flores.svg';
import SummersDarkReview from '../assets/images/images/summer-dark.svg';
import FloresDarkReview from '../assets/images/images/flores-dark.svg';

const Clients = () => {
  return (
    <section id="clients">
      <div className="section-5">
        <div className="our-app">
          <h2>Clients are<br /> Loving Our App</h2>
        </div>

        <div className="rew-light">
          <div className="summers">
            <img src={SummersReview} alt="A four star review" />
          </div>

          <div className="flores">
            <img src={FloresReview} alt="A five star review" />
          </div>
        </div>

        <div className="rew-dark">
          <div className="summers-dark">
            <img src={SummersDarkReview} alt="A four star review" />
          </div>

          <div className="flores-dark">
            <img src={FloresDarkReview} alt="A five star review" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;