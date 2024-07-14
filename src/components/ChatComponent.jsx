import React, { useContext, useEffect, useState } from "react";
import { TelegramContext } from "../context/TelegramContext";
import { GrAttachment, GrMicrophone } from "react-icons/gr";
import { BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowBackOutline, IoSearchSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { convertToShortTime, formatDate } from "../utils/utils";
import { BiCheckDouble } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ChatComponent = ({ id }) => {
  const { selectedChatInfo, allChats, isDarkMode } =
    useContext(TelegramContext);
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  console.log(selectedChatInfo);

  useEffect(() => {
    if (allChats && id) {
      const chat = allChats.find((chat) => chat.id == id);
      setName(chat.creator.name ? chat.creator.name : "BeyondChats");
    }
  }, [allChats, id]);

  return location.pathname.split("/")[1] === "chat" ? (
    <main
      className={`${
        isDarkMode ? "bg-[#0e1621]" : "bg-[#85BD81]"
      } h-screen relative`}
    >
      <div
        className={`flex items-center justify-between gap-4 z-10 ${
          isDarkMode ? "bg-[#1C2732]" : "bg-white"
        } absolute top-0 left-0 right-0 py-2 px-4`}
      >
        <IoArrowBackOutline
          onClick={() => navigate(-1)}
          className="max-[500px]:block hidden cursor-pointer text-xl"
        />

        <div className="flex items-center gap-2 flex-grow">
          <span className="hidden max-[500px]:flex rounded-full text-white bg-[#0088CC] w-[35px] h-[35px] justify-center items-center text-lg font-semibold">
            B
          </span>
          <div className="flex flex-col text-sm">
            <span>{name}</span>
            <p className="text-gray-400">last seen recently</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-xl text-gray-400">
          <IoSearchSharp className="cursor-pointer max-[500px]:hidden" />
          <MdCall className="cursor-pointer" />
          <BsThreeDotsVertical className="cursor-pointer" />
        </div>
      </div>

      <section className="my-[50px] px-3 absolute bottom-0 left-0 right-0 max-h-[81%] overflow-scroll">
        <div className="flex flex-col gap-4 relative">
          <span
            className={`${
              isDarkMode ? "bg-[#1c2732b4]" : "bg-black/20 text-white"
            } self-center px-3 py-1 text-sm rounded-full sticky top-0 z-10 shadow-xl`}
          >
            {selectedChatInfo ? formatDate(selectedChatInfo[0].created_at) : ""}
          </span>
          {selectedChatInfo?.map((msg) => {
            return (
              <div
                className={`${
                  msg.sender_id == 1
                    ? `${isDarkMode ? "bg-[#1C2732]" : "bg-white"}`
                    : `${
                        isDarkMode ? "bg-[#2B5278]" : "bg-[#E2FFC7]"
                      } self-end pr-[70px]`
                } max-w-[55%] px-2 py-1 rounded-xl relative`}
              >
                <p className="w-[85%]">{msg.message}</p>
                <div className="text-xs absolute bottom-1 right-1 text-gray-400 flex gap-2 items-center">
                  <span>{convertToShortTime(msg.created_at)}</span>
                  <BiCheckDouble
                    className={`text-base text-[#0088CC] ${
                      msg.sender_id == 1 ? "hidden" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div
        className={`flex items-center gap-4 text-gray-400 ${
          isDarkMode ? "bg-[#1C2732]" : "bg-white border-l "
        } p-3 absolute bottom-0 left-0 right-0`}
      >
        <GrAttachment className="cursor-pointer" />
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-grow bg-transparent outline-none text-xs"
        />
        <BsEmojiSmile className="cursor-pointer" />
        <GrMicrophone className="cursor-pointer" />
      </div>
    </main>
  ) : (
    <div
      className={`${
        isDarkMode ? "bg-[#0E1621]" : "bg-[#85BD81]"
      } h-full flex justify-center items-center`}
    >
      <p
        className={`${
          isDarkMode ? "bg-[#323c4b]" : "bg-gray-300/40"
        } px-2 rounded-full text-sm`}
      >
        Select a chat to see messages
      </p>
    </div>
  );
};

export default ChatComponent;
