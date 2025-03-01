import React, { useState, useEffect } from "react";
import { MdRssFeed } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaUserGroup, FaRegBookmark } from "react-icons/fa6";
import { PiBagSimple } from "react-icons/pi";
import { MdEventNote } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { Users } from "../../dummyData";
import CloseFriends from "./CloseFriends";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(false)

  const dropdownHandle = () => {
    setDropdown(!dropdown);
  }
  

  return (
    <div className="fixed z-0 w-1/4 mt-5 p-8 h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      <ul className="sideBar_style">
        <li className="flex h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md ">
          <MdRssFeed className="text-2xl " />
          <span className="text-lg ml-5">Feed</span>
        </li>
        <li className="flex mt-5  h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md ">
          <IoIosChatbubbles className="text-2xl" />
          <span className="text-lg ml-5">Chats</span>
        </li>
        <li className="flex mt-5  h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md ">
          <MdSlowMotionVideo className="text-2xl" />
          <span className="text-lg ml-5">Videos</span>
        </li>
        <li className="flex mt-5  h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md ">
          <FaUserGroup className="text-2xl" />
          <span className="text-lg ml-5">Groups</span>
        </li>
        <li className="flex mt-5  h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md ">
          <FaRegBookmark className="text-2xl" />
          <span className="text-lg ml-5">Bookmarks</span>
        </li>
        <li className="flex mt-5  h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md ">
          <PiBagSimple className="text-2xl" />
          <span className="text-lg ml-5">Job</span>
        </li>
        <li className="flex mt-5  h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md  ">
          <MdEventNote className="text-2xl" />
          <span className="text-lg ml-5">Event</span>
        </li>
        <li className="flex mt-5  h-8 items-center hover:bg-slate-100 cursor-pointer rounded-md ">
          <GoQuestion className="text-2xl" />
          <span className="text-lg ml-5">Question</span>
        </li>
      </ul>
      <button
        type="submit"
        className=" w-full mt-4 mb-4 px-4 py-2 bg-slate-300 hover:bg-slate-400 hover:text-white rounded-md shadow-md transition-all duration-300"  onClick={dropdownHandle}
      >
        Followers
      </button>
      <hr className="border-t-2 border-gray-700 my-4" />
      <div className="ShowMore"  >
        <ul className="" >
          {dropdown && (
            
            Users.map((u) => (
              <CloseFriends key={u.id} user={u} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
