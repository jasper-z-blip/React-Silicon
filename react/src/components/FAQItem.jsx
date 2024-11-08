// FAQItem.js
import React from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'active' : ''}`}>
    <h3>{question}</h3>
    <a href="#" className="more" onClick={onToggle}>
      <span className="btn-circle">
        <i
          className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}
        ></i>
      </span>
    </a>
    {isOpen && <p>{answer}</p>}
  </div>
);

export default FAQItem;

