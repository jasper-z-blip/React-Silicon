import React from 'react';
import Brand1 from '../assets/images/images/brand-1.svg';
import Brand2 from '../assets/images/images/brand-2.svg';
import Brand3 from '../assets/images/images/brand-3.svg';
import Brand4 from '../assets/images/images/brand-4.svg';
import Brand5 from '../assets/images/images/brand-5.svg';
import Brand6 from '../assets/images/images/brand-6.svg';

const BrandsSection = () => {
  return (
    <section id="brands">
      <div className="section-1">
        <div id="brand-1" className="brand-box">
          <img src={Brand1} alt="LOGO" />
        </div>

        <div id="brand-2" className="brand-box">
          <img src={Brand2} alt="logoipsum" />
        </div>

        <div id="brand-3" className="brand-box">
          <img src={Brand3} alt="LOGOIPSUM" />
        </div>

        <div id="brand-4" className="brand-box">
          <img src={Brand4} alt="logoipsum" />
        </div>

        <div id="brand-5" className="brand-box">
          <img src={Brand5} alt="logoipsum" />
        </div>

        <div id="brand-6" className="brand-box">
          <img src={Brand6} alt="LOGOIPSUM" />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;