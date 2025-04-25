

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ChatBox = () => {
  const { t } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const [currentMessage, setCurrentMessage] = useState({
    question: "",
    answer: "",
  });

  const options = [
    { id: 1, text: t("chatbox.options.1") },
    { id: 2, text: t("chatbox.options.2") },
    { id: 3, text: t("chatbox.options.3") },
    { id: 4, text: t("chatbox.options.4") },
    { id: 5, text: t("chatbox.options.5") },
    { id: 6, text: t("chatbox.options.6") },
    { id: 7, text: t("chatbox.options.7") },
  ];

  const responses = {
    1: t("chatbox.responses.1"),
    2: t("chatbox.responses.2"),
    3: t("chatbox.responses.3"),
    4: t("chatbox.responses.4"),
    5: t("chatbox.responses.5"),
    6: t("chatbox.responses.6"),
    7: t("chatbox.responses.7"),
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetToInitialState();
    }
  };

  const resetToInitialState = () => {
    setShowQuestions(true);
    setCurrentMessage({
      question: "",
      answer: "",
    });
  };

  const handleOptionClick = (optionId) => {
    const selectedOption = options.find((opt) => opt.id === optionId);
    if (selectedOption) {
      setCurrentMessage({
        question: selectedOption.text,
        answer: responses[optionId],
      });
      setShowQuestions(false);
    }
  };

  const handleBackClick = () => {
    setShowQuestions(true);
  };

  return (
    <>
      <button className="chatbox-toggle" onClick={toggleChat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-header">
            <h3>{t("chatbox.title")}</h3>
            <button className="close-button" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chatbox-messages">
            {currentMessage.question && (
              <>
                <div className="message user">{currentMessage.question}</div>
                <div className="message bot">{currentMessage.answer}</div>
              </>
            )}
          </div>

          <div className="chatbox-footer">
            {!showQuestions ? (
              <button className="back-button" onClick={handleBackClick}>
                {t("chatbox.backButton")}
              </button>
            ) : (
              <div className="chatbox-options">
                {options.map((option) => (
                  <div
                    key={option.id}
                    className="option-box"
                    onClick={() => handleOptionClick(option.id)}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
