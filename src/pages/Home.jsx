import React, { useContext } from "react";
import MainChatList from "../components/MainChatList";
import ChatComponent from "../components/ChatComponent";
import { TelegramContext } from "../context/TelegramContext";

const Home = () => {
  const { isDarkMode } = useContext(TelegramContext);

  return (
    <main className="flex" style={{ color: isDarkMode ? "#fff" : "000" }}>
      <div className="w-[35%] max-[500px]:w-full">
        <MainChatList />
      </div>
      <div className="max-[500px]:hidden w-[65%] h-screen">
        <ChatComponent />
      </div>
    </main>
  );
};

export default Home;
