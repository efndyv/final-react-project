import React, { useState, useRef, useEffect } from "react";


export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      simulateBotReply();
    }
  };

  // Simulate a simple bot reply
  const simulateBotReply = () => {
    const reply = "Please stay calm, help is on the way.";
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="chatbox-container">
      {isOpen ? (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Hi, how can we help you?</span>
            <button className="close-button" onClick={toggleChat}>
              ×
            </button>
          </div>
          <div className="chatbox-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="chatbox-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <button className="emergency-button" onClick={toggleChat}>
          Chat
        </button>
      )}
    </div>
  );
}
