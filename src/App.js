import Container from "./components/Container";
import { MessageProvider } from "./context/MessageContext";

function App() {
  return (
    <MessageProvider>
      <Container />
    </MessageProvider>
  );
}

export default App;
