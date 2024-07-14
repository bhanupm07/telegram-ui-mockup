import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { TelegramContext } from "../context/TelegramContext";
import ChatCard from "./ChatCard";
import { Link } from "react-router-dom";

const MainChatList = () => {
  const { isDarkMode, allChats, setIsHamburgerOpen, isHamburgerOpen } =
    useContext(TelegramContext);

  const tabStyle = `pb-3 border-b-[3px] border-transparent ${
    isDarkMode ? "text-gray-400" : "text-white/80"
  } font-semibold flex items-center gap-2`;
  const tabCountStyle = `${
    isDarkMode ? "bg-gray-400/60" : "text-white bg-black/10"
  }  text-[#252D39] flex justify-center items-center h-5 px-1 rounded-full`;

  return (
    <main className={`max-h-screen overflow-y-scroll relative`}>
      <header
        className={`pt-4 sticky top-0 left-0 ${
          isDarkMode ? "bg-[#252D39]" : "bg-[#0088CC]"
        }`}
      >
        <div className="flex justify-between items-center mx-4 text-white">
          <div className="flex items-center gap-5">
            <GiHamburgerMenu
              className="cursor-pointer"
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            />
            <Link to="/" className="font-semibold">
              Telegram
            </Link>
          </div>
          <IoSearchSharp />
        </div>

        <section className="flex items-center gap-10 mt-6 px-4 overflow-x-auto overflow-hidden text-sm">
          <div className={tabStyle}>
            <span>All</span>
            <span className={tabCountStyle}>12</span>
          </div>
          <div className={tabStyle}>
            <span>Regular</span>
            <span className={tabCountStyle}>2</span>
          </div>
          <div className={tabStyle}>
            <span>Unread</span>
            <span className={tabCountStyle}>111</span>
          </div>
          <div className={tabStyle}>
            <span>Pending</span>
            <span className={tabCountStyle}>50</span>
          </div>
        </section>
      </header>

      <section className={`custom-chat-list ${isDarkMode ? "dark" : "light"}`}>
        {allChats?.map((chat) => {
          return <ChatCard key={chat.id} chatInfo={chat} />;
        })}
      </section>
    </main>
  );
};

export default MainChatList;
