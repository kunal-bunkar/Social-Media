import { FaUserCircle } from "react-icons/fa";

const CloseFriends = ({ user }) => {
  return (
    <li className="flex items-center mt-5 hover:cursor-pointer hover:bg-slate-100">
      <div className="text-gray-600">
        {user.profilePicture ? (
          <img
            src={user.profilePicture}
            className="w-12 h-12 rounded-full object-cover"
            alt="Profile"
          />
          
        ) : (
          <FaUserCircle className="w-12 h-12 text-gray-500" />
        )}
      </div>
      <div className="">
        <div className="text-lg ml-5">{user.username}</div>
        <div className="text-sm ml-5 text-gray-600">{user.userId}</div>
      </div>
    </li>
  );
};

export default CloseFriends;
