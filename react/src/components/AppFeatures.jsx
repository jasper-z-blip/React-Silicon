import React from 'react';
import MobileAppImage from '../assets/images/images/mobile-appfeatures.svg';
import Icon1 from '../assets/images/images/icon-1.svg';
import Icon2 from '../assets/images/images/icon-2.svg';
import Icon3 from '../assets/images/images/icon-3.svg';
import Icon4 from '../assets/images/images/icon-4.svg';
import Icon5 from '../assets/images/images/icon-5.svg';
import Icon6 from '../assets/images/images/icon-6.svg';

const AppFeatures = () => {
  return (
    <section id="app-features">
      <div className="box-2">
        <div className="section-2">
          
          <div className="mobile-app">
            <img src={MobileAppImage} alt="Mobilephone with a purple credit card in front of it." />
          </div>

          <div className="text">
            <h2>App Features</h2>
            <p className="paragraph-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
              Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>

          <div className="container-1">
            <div className="feature">
              <div className="feat-1">
                <div className="icon-heading">
                  <img className="icons" src={Icon1} alt="Easy payments" />
                  <h3>Easy Payments</h3>
                </div>
                <p className="paragraphs">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feat-1">
                <div className="icon-heading">
                  <img className="icons" src={Icon2} alt="Cost statistics" />
                  <h3>Cost Statistics</h3>
                </div>
                <p className="paragraphs">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feat-3">
                <div className="icon-heading">
                  <img className="icons" src={Icon3} alt="Regular cashback" />
                  <h3>Regular Cashback</h3>
                </div>
                <p className="paragraphs">Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </div>
          </div>

          <div className="container-2">
            <div className="feature">
              <div className="icon-heading">
                <img className="icons" src={Icon4} alt="Data security" />
                <h3>Data Security</h3>
              </div>
              <p className="paragraphs">Auge pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>

            <div className="feature">
              <div className="icon-heading">
                <img className="icons" src={Icon5} alt="Support 24/7" />
                <h3>Support 24/7</h3>
              </div>
              <p className="paragraphs">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>

            <div className="feature">
              <div className="icon-heading">
                <img className="icons" src={Icon6} alt="Top standards" />
                <h3>Top Standards</h3>
              </div>
              <p className="paragraphs">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;