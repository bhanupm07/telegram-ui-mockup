import React, { useContext } from "react";
import { convertToShortTime } from "../utils/utils";
import { NavLink } from "react-router-dom";
import { TelegramContext } from "../context/TelegramContext";

const ChatCard = ({ chatInfo }) => {
  const { id, creator, created_at, msg_count } = chatInfo;
  const { isDarkMode } = useContext(TelegramContext);

  return (
    <NavLink
      to={`/chat/${id}`}
      className={`flex items-center gap-3 ${
        isDarkMode
          ? "bg-[#1C2732] hover:bg-[#252D39]"
          : "bg-white text-black hover:bg-gray-100"
      }  p-2 cursor-pointer`}
    >
      <span className="rounded-full bg-orange-700 w-[50px] h-[44px] flex justify-center items-center text-2xl font-semibold text-white">
        B
      </span>
      <div className="w-full text-sm">
        <div className="flex justify-between items-center">
          <span className="text-sm">
            {creator.name ? creator.name : "BeyondChats"}
          </span>
          <span className="text-[12px] text-gray-400">
            {convertToShortTime(created_at)}
          </span>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm">Hello there...</p>
          <span
            className={`text-white ${
              isDarkMode ? "bg-[#323c4b]" : "bg-black/20"
            } p-1 px-2 rounded-full`}
          >
            {msg_count}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ChatCard;
