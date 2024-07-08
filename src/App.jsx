import { Route, Routes } from "react-router-dom";
// import "./index.css";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:id" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
