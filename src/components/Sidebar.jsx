import React, { useContext, useEffect, useRef } from "react";
import { TelegramContext } from "../context/TelegramContext";
import { PiSunDimFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi2";
import {
  IoPersonOutline,
  IoSettingsOutline,
  IoPersonAddOutline,
} from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";
import { RxQuestionMarkCircled } from "react-icons/rx";

const Sidebar = () => {
  const { isDarkMode, isHamburgerOpen, setIsHamburgerOpen, setIsDarkMode } =
    useContext(TelegramContext);
  const sidebarRef = useRef(null);

  const sidebarInfo = [
    {
      title: "My Profile",
      icon: <CgProfile />,
    },
    {
      title: "New Group",
      icon: <HiOutlineUserGroup />,
    },
    {
      title: "Contacts",
      icon: <IoPersonOutline />,
    },
    {
      title: "Calls",
      icon: <MdOutlineLocalPhone />,
    },
    {
      title: "People Nearby",
      icon: <TbCurrentLocation />,
    },
    {
      title: "Saved Messages",
      icon: <FaRegBookmark />,
    },
    {
      title: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      title: "Invite Friends",
      icon: <IoPersonAddOutline />,
    },
    {
      title: "Telegram Features",
      icon: <RxQuestionMarkCircled />,
    },
  ];

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsHamburgerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main
      className={`${
        isDarkMode ? "bg-[#1C2732] text-white" : "bg-white text-black"
      } h-screen absolute top-0 -left-[250px] bottom-0 z-30 text-sm w-[250px] custom-sidebar ${
        isHamburgerOpen ? "open" : ""
      }`}
      ref={sidebarRef}
    >
      <section
        className={`${
          isDarkMode ? "bg-[#252D39]" : "bg-[#0088CC]"
        } text-white p-4 pb-2`}
      >
        <div className="flex justify-between mb-3">
          <span className="flex rounded-full bg-orange-700 w-[50px] h-[50px] justify-center items-center text-xl font-semibold">
            B
          </span>
          <span
            className="text-xl cursor-pointer"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <PiSunDimFill /> : <BsFillMoonStarsFill />}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <span>bhanu</span>
            <span className="text-xs text-gray-300">+91 9876543210</span>
          </div>
          <IoIosArrowDown className="text-xl" />
        </div>
      </section>

      <section className="flex flex-col">
        {sidebarInfo.map((obj) => {
          return (
            <div
              className={`flex gap-5 items-center py-3 px-5 ${
                isDarkMode ? "hover:bg-[#252D39]" : "hover:bg-gray-100"
              } cursor-pointer ${
                obj.title === "Settings"
                  ? `pb-5 border-b ${
                      isDarkMode ? "border-black" : "border-gray-200"
                    }`
                  : ""
              }`}
            >
              <span className="text-gray-400 text-lg">{obj.icon}</span>
              <span className="font-semibold">{obj.title}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Sidebar;
