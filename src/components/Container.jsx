import React from "react";
import { useEffect } from "react";
import { useChat } from "../context/MessageContext";
import { init, subscribeChat, getMessages } from "../socketIo";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export default function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    getMessages((messages) => {
      setMessages(messages);
    });
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    }, []);
  });
  return (
    <>
      <MessageList />
      <MessageForm />
    </>
  );
}
