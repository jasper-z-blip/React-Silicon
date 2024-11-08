import React from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'active' : ''}`}>
    <div className="question-row">
      <h3>{question}</h3>
      <a
        href="#"
        className="more"
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        <span className="btn-circle">
          <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </span>
      </a>
    </div>
    {isOpen && <p className="answer-text">{answer}</p>}
  </div>
);

export default FAQItem;