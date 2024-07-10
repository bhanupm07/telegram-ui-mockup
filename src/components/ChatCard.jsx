import React from "react";
import { convertToShortTime } from "../utils/utils";
import { NavLink } from "react-router-dom";

const ChatCard = ({ chatInfo }) => {
  const { id, creator, created_at, msg_count } = chatInfo;

  return (
    <NavLink
      to={`/chat/${id}`}
      className="flex items-center gap-3 bg-[#1C2732] p-2 hover:bg-[#252D39] cursor-pointer"
    >
      <span className="rounded-full bg-[#0088CC] w-[60px] h-[50px] flex justify-center items-center text-2xl font-semibold">
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
          <span className="text-white bg-[#323c4b] p-1 px-2 rounded-full">
            {msg_count}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ChatCard;
