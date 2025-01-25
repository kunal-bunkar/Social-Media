import EditProfile from "./EditProfile";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";

const Profile = () => {
  const [editPage, Setpage] = useState(false);

  const btnHandle = () => {
    Setpage(true);
    console.log(editPage);
  };
  const [bg,setbg] = useState('/images/background.jpg')
  const [handle, setHandle] = useState({
    image: "",
    name: "",
    bio: "",
  });

  const backHandle =(e)=>{
    const file = e.target.files[0];
    if(file){
      const render = new FileReader()
      render.onload=(event)=>{
        setbg(event.target.result)
        console.log(bg)
      }
      render.readAsDataURL(file);
    }
  }

  return (
    <>
      <div className="flex  ">
        <div className="profile  mt-16 ">
          <div className="profileContainer ">
            <div className="pTop">
              <div className="h-12 w-12 rounded-full bg-white relative ml-4 -mb-12 hover:bg-gray-200 flex items-center justify-center"
              onClick={backHandle}>
                <MdOutlineModeEdit className="text-2xl" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={backHandle}
                  className=" absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <img
                src={bg}
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
                <button onClick={btnHandle}>Edit</button>
              </div>
              <div className="z-50">
                {editPage && (
                  <EditProfile
                    handle={handle}
                    setHandle={setHandle}
                    Setpage={Setpage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
