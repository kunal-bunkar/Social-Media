import { FaCircle } from "react-icons/fa";
const OnlineUser = ({user}) => {
  return (
    <li className="flex items-center my-4">
            <div className="onlineProfile flex  ">
              <img
                className="w-12 h-12 rounded-full object-cover -mr-3  "
                src={user.profilePicture}
                alt="error"
              />
              <FaCircle className="text-green-500   "/>
            </div>
            <span className="ml-4 font-semibold">{user.username}</span>
          </li>
  )
}

export default OnlineUser