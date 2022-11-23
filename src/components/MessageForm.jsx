import React from "react";
import { useState } from "react";
import { useChat } from "../context/MessageContext";
import { sendMessage } from "../socketIo";
import "./styles.css";
export default function MessageForm() {
  const [message, setMessage] = useState("");
  const { setMessages } = useChat();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((prevState) => [...prevState, { message, fromMe: true }]);
		sendMessage(message);
		setMessage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="textInput"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
    </>
  );
}
