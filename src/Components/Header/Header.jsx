import { IoMdSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-blue-400 h-[4rem] z-10 fixed">
      <div className="left ml-3">
        <div className="app-name text-3xl font-semibold">Social Media</div>
      </div>

      {/* MIddel part */}
      <div className="mid ">
        <div className="input flex">
          <IoMdSearch className="text-4xl mr-2" />
          <input className="rounded-full p-2 w-80 outline-none text-gray-700" type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Right part */}
      <div className="right flex mr-3 ">
        <div className=" w-80 links flex justify-around items-center text-white">
          <span>Homepage</span>
          <span>Timeline</span>
        </div>
        <div className="icons w-36 flex justify-around items-center ">
          <div className="user-ID">
            <FaUserCircle className="text-4xl cursor-pointer"/> 
          </div>
          <div className="notification ">
            <IoIosNotifications className="text-4xl cursor-pointer" />
          </div>
          <div className="msg ">
            <IoIosChatbubbles className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
