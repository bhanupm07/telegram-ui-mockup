import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { TelegramContext } from "../context/TelegramContext";
import ChatCard from "./ChatCard";

const MainChatList = () => {
  const { isDarkMode, allChats } = useContext(TelegramContext);

  const tabStyle = `pb-3 border-b-[3px] border-transparent text-gray-400 font-semibold flex items-center gap-2`;
  const tabCountStyle = `bg-gray-400 text-[#252D39] flex justify-center items-center h-5 px-1 rounded-full`;

  return (
    <main
      className="w-[35%] max-[500px]:w-full max-h-screen overflow-y-scroll relative"
      style={{
        background: isDarkMode ? "#252D39" : "#fff",
      }}
    >
      <header className="pt-4 sticky top-0 left-0 bg-[#252D39]">
        <div className="flex justify-between items-center mx-4">
          <div className="flex items-center gap-5">
            <GiHamburgerMenu />
            <h1 className="font-semibold">Telegram</h1>
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

      <section className="">
        {allChats?.map((chat) => {
          return <ChatCard chatInfo={chat} />;
        })}
      </section>
    </main>
  );
};

export default MainChatList;
