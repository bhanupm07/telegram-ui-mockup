import React, { useContext } from "react";
import { TelegramContext } from "../context/TelegramContext";
import { GrAttachment, GrMicrophone } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";
import { IoArrowBackOutline } from "react-icons/io5";

const ChatComponent = () => {
  const { selectedChatInfo } = useContext(TelegramContext);

  console.log(selectedChatInfo);

  return selectedChatInfo ? (
    <main className="bg-[#0e1621] h-screen relative">
      <div className="bg-[#1C2732] absolute top-0 left-0 right-0 p-3">
        <IoArrowBackOutline className="max-[500px]:block hidden" />
        <div>
          <span></span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-gray-400 bg-[#1C2732] p-3 absolute bottom-0 left-0 right-0">
        <GrAttachment />
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-grow bg-transparent outline-none text-xs"
        />
        <BsEmojiSmile />
        <GrMicrophone />
      </div>
    </main>
  ) : (
    <div className="bg-[#0E1621] h-full flex justify-center items-center">
      <p className="bg-[#323c4b] px-2 rounded-full text-sm">
        Select a chat to see messages
      </p>
    </div>
  );
};

export default ChatComponent;
