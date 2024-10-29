import React from 'react';
import FullImage1 from '../assets/images/images/full image.svg';
import FullImage2 from '../assets/images/images/full image-2.svg';
import Icon1 from '../assets/images/images/icon-1.svg';
import Icon3 from '../assets/images/images/icon-3.svg';

const MakeMoney = () => {
  return (
    <section id="make-money">
      <div className="box-4">
        <div className="section-4">
          
          <div className="text-1">
            <div>
              <h2>Make your money<br /> transfer simple and clear</h2>
              <ul className="feat-list">
                <li className="list-1">Banking transactions are free for you</li>
                <li className="list-2">No monthly cash commission</li>
                <li className="list-3">Manage payments and transactions online</li>
              </ul>
              <a id="learn-1" href="#" className="btn-2">
                <span style={{ color: 'white' }}>Learn more</span>
                <i className="fa-solid fa-arrow-right" style={{ color: 'white' }}></i>
              </a>
            </div>
          </div>

          <div className="img-1">
            <div className="img-1-2">
              <img src={FullImage1} alt="A list of contacts." />
            </div>
          </div>

          <div className="img-2">
            <div className="box-image">
              <img src={FullImage2} alt="A calculation of September's forecast." />
            </div>
          </div>

          <div className="text-2">
            <h2 className="headline-R">Receive payment from<br /> international bank details</h2>

            <div className="icon-1">
              <img src={Icon1} alt="Icon 1" />
            </div>
            <p className="para-1">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>

            <div className="icon-3">
              <img src={Icon3} alt="Icon 3" />
            </div>
            <p className="para-2">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>

            <a id="learn-2" href="#" className="btn-3">
              <span style={{ color: 'white' }}>Learn more</span>
              <i className="fa-solid fa-arrow-right" style={{ color: 'white' }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeMoney;