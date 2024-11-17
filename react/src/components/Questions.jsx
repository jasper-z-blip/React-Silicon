import React, { useState, useEffect } from 'react';
import FAQItem from './FAQItem';
import BluePhone from '../assets/images/images/blue-phone.svg';
import GreenBubble from '../assets/images/images/green-bubble.svg';

const Questions = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFaqs(data);
      })
      .catch((error) => console.error('Error fetching FAQs:', error));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Heading och Subheading */}
      <div className="faq-header">
        <h1 className="faq-heading">Any questions?<br/> Check out the FAQs</h1>
        <p className="faq-subheading">
          Still have unanswered questions and need to get in touch?
        </p>
      </div>

      {/* FAQ Items */}
      <div className="faq-questions">
        {faqs.length === 0 ? (
          <p>Inga frågor hittades eller laddas...</p>
        ) : (
          faqs.map((faq, index) => (
            <FAQItem
              key={faq.id || index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))
        )}
      </div>

      {/* FAQ Cards */}
      <div className="faq-cards">
        {/* Phone Contact */}
        <div className="faq-card">
          <img src={BluePhone} alt="Blue phone." className="faq-icon" />
          <p className="faq-title">Still have questions?</p>
          <a href="#" className="faq-link">
            Contact us &rarr;
          </a>
        </div>

        {/* Chat Contact */}
        <div className="faq-card">
          <img src={GreenBubble} alt="Green speak-bubble." className="faq-icon" />
          <p className="faq-title">Don't like phone calls?</p>
          <a href="#" className="faq-link">
            Contact us &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Questions;
