import { createContext, useEffect, useState } from "react";

export const TelegramContext = createContext();

export const TelegramInfoProvider = ({ children }) => {
  const [allChats, setAllChats] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const fetchAllChats = async () => {
    const response = await fetch(
      "https://devapi.beyondchats.com/api/get_all_chats?page=1"
    );
    const data = await response.json();
    // console.log(data.data.data);
    setAllChats(data.data.data);
  };

  useEffect(() => {
    fetchAllChats();
  }, []);

  return (
    <TelegramContext.Provider value={{ allChats, isDarkMode }}>
      {children}
    </TelegramContext.Provider>
  );
};
