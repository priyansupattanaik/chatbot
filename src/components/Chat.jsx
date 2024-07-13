// src/components/Chat.jsx
import React, { useState } from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    setMessages([...messages, { sender: "user", text }]);
    // Integrate Gemini API here
    fetchGeminiResponse(text).then((response) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: response },
      ]);
    });
  };

  const fetchGeminiResponse = async (text) => {
    // Replace with actual Gemini API call
    return new Promise((resolve) =>
      setTimeout(() => resolve("This is a response from Gemini API"), 500)
    );
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default Chat;
