import React from "react";
import SideBar from "./SideBar";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  const { menu } = useSelector((store) => store.sideBar);

  return (
    <>
      {menu ? (
        <div className="relative">
          <div className="relative">
            <ButtonList />
          </div>
          <div className="flex">
          <div className="z-10 absolute top-16 left-0 w-[80%]">
            <SideBar />
          </div>
          <Outlet/>
          </div>
        </div>
      ) : (
        <>
          <ButtonList />
          <div className="flex">
          <SideBar />
          <Outlet/>
          </div>
        </>
      )}
    </>
  );
};

export default Body;
