import React from 'react';
import FullStar from '../assets/images/images/full-star.svg';
import EmptyStar from '../assets/images/images/empty-star.svg';
import FemaleImg from '../assets/images/images/female-img.svg';
import MaleImg from '../assets/images/images/male-img.svg';
import QuotesBluebox from '../assets/images/images/quotes-bluebox.svg';

const Clients = () => {
  return (
    <section id="clients">
        <div className="our-app">
          <h2>Clients are<br /> Loving Our App</h2>
        </div>

        <div className="reviews">
          <div className="review-1">
            <div className='citattecken-1'>
              <img src={QuotesBluebox} alt="Quotes in a blubox" />
            </div>
            <img src={FullStar} alt="A yellow star" />
            <img src={FullStar} alt="A yellow star" />
            <img src={FullStar} alt="A yellow star" />
            <img src={FullStar} alt="A yellow star" />
            <img src={EmptyStar} alt="An empty star" />
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
            <div className='img-name-1'>
              <img src={FemaleImg} alt="An avatar of a female" />
              <div className='test-text'>
                <h3>Fannie Summers</h3>
                <p>Designer</p>
              </div>
            </div>
          </div>

          <div className="review-2">
            <div className='citattecken-1'>
            <img src={QuotesBluebox} alt="Quotes in a blubox" />
            </div>
            <img src={FullStar} alt="A yellow star" />
            <img src={FullStar} alt="A yellow star" />
            <img src={FullStar} alt="A yellow star" />
            <img src={FullStar} alt="A yellow star" />
            <img src={FullStar} alt="A yellow star" />
            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
            <div className='img-name-2'>
              <img src={MaleImg} alt="An avatar of a male" />
              <div className='test-text'>
                <h3>Albert Flores</h3>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Clients;