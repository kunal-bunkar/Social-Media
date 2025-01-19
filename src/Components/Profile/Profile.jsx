import EditProfile from "./EditProfile";
import { useState } from "react";

const Profile = () => {
  const [editPage, Setpage] = useState(false);

  const btnHandle = () => {
    Setpage(true);
    console.log(editPage);
  };

  const [handle, setHandle] = useState({
    
    image: "",
    name: "",
    bio: "",
  });

  return (
    <>
      <div className="flex  ">
        <div className="profile  mt-16 ">
          <div className="profileContainer ">
            <div className="pTop">
              <img
                src="./images/p1.png"
                className=" h-60 w-screen pr-6 "
                alt=""
                />
              <img
                src={handle.image}
                className="h-40 w-40 rounded-full border-4 border-[#eef1f5]  m-auto relative -mt-24"
                alt=""
                />
            </div>

            <div className="profileInfo grid justify-items-center">
              <h4 className="font-bold text-xl">{handle.name}</h4>
              <span>{handle.bio} </span>
              <div className="editBtn px-4 py-1 rounded-md bg-slate-300 hover:bg-slate-500 hover:text-white  shadow-md transition-all duration-300">
                <button onClick={btnHandle }>Edit</button>
              </div>
              <div className="z-50">

                { editPage && <EditProfile handle={handle}  setHandle={setHandle} Setpage={Setpage} /> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
