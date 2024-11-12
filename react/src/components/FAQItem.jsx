import React from 'react';

const FAQItem = ({ item, isOpen, onToggle }) => {
  
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div className="question-row">
        <h3>{item.title}</h3>
        <a
          href="#"
          className="more"
          onClick={(e) => {
            e.preventDefault();
            if (onToggle) onToggle();
          }}
        >
          <span className="btn-circle">
            <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
          </span>
        </a>
      </div>
      {isOpen && <p className="answer-text">{item.content}</p>}
    </div>
  );
};

export default FAQItem;

