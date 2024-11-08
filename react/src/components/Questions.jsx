import React, { useState } from 'react';
import FAQItem from './FAQItem';
import BluePhone from '../assets/images/images/blue-phone.svg';
import GreenBubble from '../assets/images/images/green-bubble.svg';

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is any of my personal information stored in the App?",
      answer: "We only save the necessary data, nothing will be passed on to others.",
    },
    {
      question: "What formats can I download my transaction history in?",
      answer: "The available formats for downloading transaction history vary, depending on the application or banks specific offerings.",
    },
    {
      question: "Can I schedule future transfers?",
      answer: "Yes, that's possible.",
    },
    {
      question: "When can I use Banking App services?",
      answer: "You can use the banking app service anywhere you have an internet connection.",
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer: "Yes, you can create your own password and you can also use bank ID.",
    },
    {
      question: "What happens if I forget or lose my password?",
      answer: "You can contact customer service and we can help you change your password, or you can change it yourself using bank ID.",
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions">
      <div className="section-6">
        <div className="box-1">
          <h2>Any questions?<br />Check out the FAQs!</h2>
          <p className="still-un">Still have unanswered questions and need to get in touch?</p>
        </div>

        <div className="box-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              chevronColor={openIndex === index ? '#ffffff' : 'var(--color-chevron)'}
            />
          ))}

          <div className="phoneandbubble">
            <ContactOption imageSrc={BluePhone} altText="Blue phone that rings" contactText="Still have questions?" />
            <ContactOption imageSrc={GreenBubble} altText="Green speech bubble" contactText="Don't like phone calls?" />
          </div>

          <div className="button-box">
            <button className="contact-button">Contact us now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactOption = ({ imageSrc, altText, contactText }) => (
  <div className="contact-option">
    <img src={imageSrc} alt={altText} />
    <p>{contactText}</p>
    <a href="#">
      <span>Contact us</span>
      <i className="fa-solid fa-arrow-right"></i>
    </a>
  </div>
);

export default Questions;
