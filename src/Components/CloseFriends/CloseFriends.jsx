
import { FaUserCircle } from "react-icons/fa";

const CloseFriends = ({user}) => {
  return (
    <li className="flex mt-5">
              <FaUserCircle className="text-3xl" />
              <span className="text-lg ml-5">{user.username}</span>
            </li>
  )
}

export default CloseFriends