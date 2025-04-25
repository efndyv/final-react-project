import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next"; 

import Approach from "../pages/home/Approach";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t("faq.question1"),
      htmlContent: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      htmlContent: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      htmlContent: t("faq.answer3"),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question-container"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="faq-question">{item.question}</h3>
            <FaChevronDown
              className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
            />
          </div>
          {activeIndex === index && (
            <p
              className="faq-answer"
              dangerouslySetInnerHTML={{ __html: item.htmlContent }}
            ></p>
          )}
        </div>
      ))}
      <div style={{ marginLeft: "20px" }}>
        <Approach />
      </div>
    </div>
  );
};

export default FAQ;
