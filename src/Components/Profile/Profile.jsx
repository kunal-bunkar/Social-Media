import Header from "../Header/Header";
import Sidebar from "../SIdebar/Sidebar";
import Feed from "../Feed/Feed";
import Rightbar from "../Rightbar/Rightbar";

const Profile = () => {
  return (
    <>
      <Header></Header>
      <div className="flex ">
        <div className="sidebar basis-1/4 mt-12">
          <Sidebar></Sidebar>
          
        </div>
        <div className="feed basis-1/2 mt-12">
          <Feed></Feed>
        </div>
        <div className="rightbar basis-1/3 mt-12">
          <Rightbar></Rightbar>
        </div>
      </div>
    </>
  );
};

export default Profile;
