import { FcGallery } from "react-icons/fc";
import { FaTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

const Share = () => {
  return (
    <div className="m-5 border border-blackbg-blue-300 shadow-xl">
      <div className="container p-4">
        <div className="sTop flex align-middle ">
          <img
            className="w-12 rounded-full object-cover mr-3 "
            src="/images/s1.jpg"
            alt="error"
          />
          <input
            className="w-[80%] outline-none focus:outline-none"
            placeholder="What's in your mind?"
          />
        </div>
        <hr className="my-5" />
        <div className="sBottom flex justify-between items-center">
          <div className="options flex justify-evenly w-full ml-5">
            <div className="opt flex justify-center items-center mr-4 cursor-pointer">
              <FcGallery className="text-4xl mr-1" />
              <span>Photo or video</span>
            </div>
            <div className="opt flex justify-center items-center mr-4 cursor-pointer">
              <FaTag className="text-2xl text-blue-800 mr-1" />
              <span>Tags</span>
            </div>
            <div className="opt flex justify-center items-center mr-4 cursor-pointer">
              <FaLocationDot className="text-2xl text-green-700 mr-1" />
              <span>Location</span>
            </div>
            <div className="opt flex justify-center items-center mr-4 cursor-pointer">
              <BsEmojiHeartEyesFill className="text-2xl text-yellow-500 mr-1" />
              <span>Feelings</span>
            </div>
          </div>
          <button className="border-none rounded-md px-3 py-2 bg-blue-500 text-white font-medium hover:bg-blue-400 "> Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
