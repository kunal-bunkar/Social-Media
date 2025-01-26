import { IoGift } from "react-icons/io5";
import { Users } from "../../dummyData";
import OnlineUser from "./OnlineUser";
import { Adimg } from "../../dummyData";
import { useEffect, useState } from "react";

const Rightbar = () => {
  const [inx,setinx] = useState(0)
  useEffect (()=>{
    const interval = setInterval(() => {
      setinx((prev) => (prev === Adimg.length - 1 ? 0 : prev + 1));
    }, 1000); 
     return ()=>clearInterval(interval)
  },[Adimg.length])
  
  return (
    <div className="m-4">
      <div className="container">
        <div className="noBday p-4 flex items-center">
          <IoGift className="text-orange-500 text-4xl" />
          <span>
            <b>Kunal</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <div className="">
        <img className="w-96 h-60 rounded-lg" src={Adimg[inx].img} alt={`Slide ${inx}`} />
        </div>
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
