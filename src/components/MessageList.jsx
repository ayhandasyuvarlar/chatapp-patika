import React from "react";
import { useChat } from "../context/MessageContext";
import MessageItem from "./MessageItem";
import './styles.css'
export default function MessageList() {
  const { messages } = useChat();
  return (
    <div className='chat-list'>
      <div>
        {messages.map((item, key) => {
          return <MessageItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
}
