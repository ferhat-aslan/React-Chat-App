import { ChatProvider } from "./context/ChatContext.js"
import './App.css';
import Container from "./components/Container.js";

function App() {
  return (
    <ChatProvider>
    
    
      <Container/>
    </ChatProvider>
  );
}

export default App;
