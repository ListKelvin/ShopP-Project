import React, { useState } from "react";
import "./ChatBox.css";
import { ChatBoxWrapper } from "./style";
const ChatBox = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChatOpen = () => {
    setChatOpen(!chatOpen);
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div>
      <button className="chat-button" onClick={handleChatOpen}>
        Open Chat
      </button>

      <ChatBoxWrapper show={chatOpen}>
        <ul className="message-list">
          {messages.map((message, index) => (
            <li className="message" key={index}>
              {message}
            </li>
          ))}
        </ul>
        <form className="message-form" onSubmit={handleMessageSubmit}>
          <input
            className="message-input"
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
          />
          <button className="send-button" type="submit">
            Send
          </button>
        </form>
      </ChatBoxWrapper>
    </div>
  );
};

export default ChatBox;
