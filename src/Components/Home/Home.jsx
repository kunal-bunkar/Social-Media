import Header from "../Header/Header";
import Sidebar from "../SIdebar/Sidebar";
import Feed from "../Feed/Feed";
import Rightbar from "../Rightbar/Rightbar";
import Profile from "../Profile/Profile";
import { useState } from "react";

export default function Home() {
  return (
    // <div className={`main-content transition-all ${isMode ? " absolute blur-md pointer-events-none" : ""}`}>
      <div >
      <Header></Header>
      <div className="flex ">
        <div className="sidebar basis-1/4 mt-12">
          <Sidebar></Sidebar>
        </div>
        <div className=" basis-3/4  ">
          <Profile  />
          <div className="flex">
            <div className="feed  mt-12">
              <Feed></Feed>
            </div>
            <div className="rightbar  mt-12">
              <Rightbar></Rightbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
