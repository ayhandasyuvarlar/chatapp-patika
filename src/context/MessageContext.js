const { createContext, useState, useContext } = require("react");

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const values = {
    messages,
    setMessages,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export const useChat = () => useContext(MessageContext);
