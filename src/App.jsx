import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { useContext } from "react";
import { TelegramContext } from "./context/TelegramContext";
import Sidebar from "./components/Sidebar";

function App() {
  const { isHamburgerOpen } = useContext(TelegramContext);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<ChatPage />} />
      </Routes>
      {isHamburgerOpen && (
        <div className="absolute inset-0 bg-black/50 z-20"></div>
      )}
      <Sidebar />
    </main>
  );
}

export default App;
