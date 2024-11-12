import React, { useState, useEffect } from 'react';
import FAQItem from './FAQItem';

const Questions = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); // Hjälp av chatGPT
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched FAQs:", data); // Hjälp av chatGPT
        setFaqs(data);
      })
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
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
  );
};

export default Questions;
