import { createContext, useEffect, useState } from "react";
import { GiSelect } from "react-icons/gi";

export const TelegramContext = createContext();

export const TelegramInfoProvider = ({ children }) => {
  const [allChats, setAllChats] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedChatInfo, setSelectedChatInfo] = useState(null);

  const fetchAllChats = async () => {
    const response = await fetch(
      "https://devapi.beyondchats.com/api/get_all_chats?page=1"
    );
    const data = await response.json();
    console.log(data.data.data);
    setAllChats(data.data.data);
  };

  const fetchChatById = async (id) => {
    const response = await fetch(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
    );
    const data = await response.json();
    // console.log(data);
    setSelectedChatInfo(data.data);
  };

  useEffect(() => {
    fetchAllChats();
  }, []);

  return (
    <TelegramContext.Provider
      value={{ allChats, isDarkMode, fetchChatById, selectedChatInfo }}
    >
      {children}
    </TelegramContext.Provider>
  );
};
