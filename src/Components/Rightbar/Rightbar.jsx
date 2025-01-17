import { IoGift } from "react-icons/io5";
import { Users } from "../../dummyData";
import OnlineUser from "../OnlineUser/OnlineUser";

const Rightbar = () => {
  return (
    <div className="m-4">
      <div className="container">
        <div className="noBday p-4 flex items-center">
          <IoGift className="text-orange-500 text-4xl" />
          <span>
            <b>Kunal</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className="w-96 h-60 rounded-lg" src="/images/Ad.jpeg" alt="" />
        <ul className="mt-5">
          <h4 className="text-xl  font-semibold">Online Friends</h4>

          {Users.map((u)=>
          <OnlineUser key={u.id} user={u}/>
          )}
          
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
