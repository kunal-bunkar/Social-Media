import { IoMdSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="   flex w-full justify-between items-center bg-blue-400 h-[4rem] z-10 fixed">
      <div className="left ml-3">
        <div className="app-name text-3xl font-semibold text-white">Social Media</div>
      </div>

      {/* MIddel part */}
      <div className="mid ">
        <div className="input flex">
          <IoMdSearch className="text-4xl mr-2 text-gray-600 " />
          <input className="rounded-full p-2 w-80 outline-none text-gray-700" type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Right part */}
      <div className=" w-1/5 flex justify-between mr-3 ">
        <div className=" w-full min-w-40 links flex justify-around items-center text-white">
          <span>Homepage</span>
          <span>Timeline</span>
        </div>
        <div className="icons w-26 flex justify-around items-center ">
          <div className="user-ID">
            <FaUserCircle className="text-4xl text-gray-600 cursor-pointer"/> 
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
