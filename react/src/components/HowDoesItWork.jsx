import React from 'react';
import MobileImage from '../assets/images/images/mobile-temp.svg';
import FrameImage from '../assets/images/images/back-tablet.svg';
import TabletImage from '../assets/images/images/phones-tablet.svg';
import DesktopImage from '../assets/images/images/phones-desktop.svg';

const HowDoesItWork = () => {
  return (
    <section id="how-does-it-work">
      <div className="section-3">
        
        <div>
          <h2 className="how">How Does It Work?</h2>
        </div>

        <div className="mobile">
          <img src={MobileImage} alt="A phone showing transactions." />
        </div>

        <div className="frame">
          <img src={FrameImage} alt="case around the middle phone" />
        </div>

        <div className="tablet">
          <img src={TabletImage} alt="Three phones in a row showing transactions, contacts and a transfer of money." />
        </div>

        <div className="desktop">
          <img src={DesktopImage} alt="Three phones in a row showing budget, transactions and contacts." />
        </div>

        <div className="mobile-text">
          <h2>Transfers to people from your contact list</h2>
          <p>
            Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est.
            Mattis fermentum, at nec lacus.
          </p>
        </div>

        <div className="tablet-text">
          <h2>Step 3. Transfers to people from your contact list</h2>
          <p>
            Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est.
            Mattis fermentum, at nec lacus.
          </p>
        </div>

        <div className="desktop-text">
          <h2>Latest transaction history</h2>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.<br />
            Arcu sociis tristique quisque hac in consectetur condimentum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWork;