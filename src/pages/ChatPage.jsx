import React, { useContext, useEffect } from "react";
import MainChatList from "../components/MainChatList";
import ChatComponent from "../components/ChatComponent";
import { TelegramContext } from "../context/TelegramContext";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const { isDarkMode, fetchChatById } = useContext(TelegramContext);

  const { id } = useParams();

  useEffect(() => {
    fetchChatById(id);
  }, [id]);

  return (
    <main className="flex" style={{ color: isDarkMode ? "#fff" : "000" }}>
      <div className="w-[35%] max-[500px]:hidden">
        <MainChatList />
      </div>
      <div className="w-[65%] max-[500px]:w-full">
        <ChatComponent />
      </div>
    </main>
  );
};

export default ChatPage;
