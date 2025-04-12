import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import Approach from "../pages/home/Approach";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is a sustainable shoe?",

      htmlContent:
        "<p>A sustainable shoe is one made from natural, renewable materials with a low carbon footprint, using ethical and eco-friendly agricultural and manufacturing processes. At Allbirds, reducing our environmental impact has been our priority since day one. View our sustainability report here.</p><p>Renewable materials: We believe we can do better than synthetic materials. Allbirds replaces petroleum-based materials with natural, renewable ones and invents alternatives when a replacement doesn’t yet exist.</p><p>Regenerative agriculture: For us, the future of fashion is inextricably linked to the future of regenerative agriculture. Not only does it represent a huge opportunity to reverse climate change, it also provides benefits to local communities, biodiversity, ecology, the long-term viability of the land, and more. Learn more here.</p><p>Low carbon footprint: We’re holding ourselves accountable to lowering our carbon footprint and putting it on display next to each product.</p>",
    },
    {
      question: "What is the advantage of a sustainable shoe?",

      htmlContent:
        "<p>A sustainable shoe is one made from natural, renewable materials with a low carbon footprint, using ethical and eco-friendly agricultural and manufacturing processes. At Allbirds, reducing our environmental impact has been our priority since day one. View our sustainability report here.</p><p>Renewable materials: We believe we can do better than synthetic materials. Allbirds replaces petroleum-based materials with natural, renewable ones and invents alternatives when a replacement doesn’t yet exist.</p><p>Regenerative agriculture: For us, the future of fashion is inextricably linked to the future of regenerative agriculture. Not only does it represent a huge opportunity to reverse climate change, it also provides benefits to local communities, biodiversity, ecology, the long-term viability of the land, and more. Learn more here.</p><p>Low carbon footprint: We’re holding ourselves accountable to lowering our carbon footprint and putting it on display next to each product.</p>",
    },
    {
      question: "What are eco-friendly sneaker materials",

      htmlContent:
        "<p>A sustainable shoe is one made from natural, renewable materials with a low carbon footprint, using ethical and eco-friendly agricultural and manufacturing processes. At Allbirds, reducing our environmental impact has been our priority since day one. View our sustainability report here.</p><p>Renewable materials: We believe we can do better than synthetic materials. Allbirds replaces petroleum-based materials with natural, renewable ones and invents alternatives when a replacement doesn’t yet exist.</p><p>Regenerative agriculture: For us, the future of fashion is inextricably linked to the future of regenerative agriculture. Not only does it represent a huge opportunity to reverse climate change, it also provides benefits to local communities, biodiversity, ecology, the long-term viability of the land, and more. Learn more here.</p><p>Low carbon footprint: We’re holding ourselves accountable to lowering our carbon footprint and putting it on display next to each product.</p>",
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
              dangerouslySetInnerHTML={{
                __html: item.htmlContent,
              }}
            ></p>
          )}
        </div>
      ))}
      <div style={{marginLeft:'20px'}}>
        <Approach />
      </div>
    </div>
  );
};

export default FAQ;
