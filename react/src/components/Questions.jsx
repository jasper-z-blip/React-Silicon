import React from 'react';
import BluePhone from '../assets/images/images/blue-phone.svg';
import GreenBubble from '../assets/images/images/green-bubble.svg';

const Questions = () => {
  return (
    <section id="questions">
      <div className="section-6">
        <div className="box-1">
          <h2>Any questions?<br />Check out the FAQs!</h2>
          <p className="still-un">Still have unanswered questions and need to get in touch?</p>

          <div className="desktop-piece">
            <div className="square-4">
              <img src={BluePhone} alt="Blue phone that rings." />
              <p>Still have questions?</p>
              <a id="contact-4" href="#">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="square-5">
              <img src={GreenBubble} alt="Green speech bubble" />
              <p>Don't like phone calls?</p>
              <a id="contact-5" href="#">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="box-2">
          {/* Question 1 */}
          <div className="desktop-tablet-version-1">
            <h3>Is any of my personal information stored in the App?</h3>
            <a href="#" className="more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down" style={{ color: 'var(--color-chevron)' }}></i>
              </span>
            </a>
          </div>

          <div className="mobile-version-1">
            <h3>Is any of my personal information stored in the App?</h3>
            <a href="#" className="more">
              <span className="btn-circle-1">
                <i className="fa-solid fa-chevron-up" style={{ color: '#ffffff' }}></i>
              </span>
            </a>
          </div>

          <div className="mobile-version-text">
            <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.</p>
            <p>Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.</p>
          </div>

          {/* Question 2 */}
          <div className="square">
            <h3>What formats can I download my transaction history in?</h3>
            <a href="#" className="more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down" style={{ color: 'var(--color-chevron)' }}></i>
              </span>
            </a>
          </div>

          {/* Question 3 */}
          <div className="mobile-version">
            <h3>Can I schedule future transfers?</h3>
            <a href="#" className="more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down" style={{ color: 'var(--color-chevron)' }}></i>
              </span>
            </a>
          </div>

          <div className="desktop-tablet-version-2">
            <h3 className="can-i">Can I schedule future transfers?</h3>
            <a href="#" className="more">
              <span className="btn-circle-1">
                <i className="fa-solid fa-chevron-up" style={{ color: '#ffffff' }}></i>
              </span>
            </a>
            <p className="lorem">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.</p>
          </div>

          {/* Other questions */}
          <div className="square">
            <h3>When can I use Banking App services?</h3>
            <a href="#" className="more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down" style={{ color: 'var(--color-chevron)' }}></i>
              </span>
            </a>
          </div>

          <div className="square">
            <h3>Can I create my own password that is easy for me to remember?</h3>
            <a href="#" className="more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down" style={{ color: 'var(--color-chevron)' }}></i>
              </span>
            </a>
          </div>

          <div className="square-1">
            <h3>What happens if I forget or lose my password?</h3>
            <a href="#" className="more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down" style={{ color: 'var(--color-chevron)' }}></i>
              </span>
            </a>
          </div>

          <div className="tablet-piece">
            <div className="square-2">
              <img src={BluePhone} alt="Blue phone that rings." />
              <p>Still have questions?</p>
              <a id="contact-1" href="#">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="square-3">
              <img src={GreenBubble} alt="Green speech bubble" />
              <p>Don't like phone calls?</p>
              <a id="contact-2" href="#">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="button-box">
            <button className="contact-button">Contact us now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
