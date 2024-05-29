import React from "react";
import SideBar from "./SideBar";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";

const Body = () => {
  const { menu } = useSelector((store) => store.sideBar);

  return (
    <>
      {menu ? (
        <div className="relative">
          <div className="relative">
            <ButtonList />
          </div>
          <div className="z-10 absolute top-16 left-0 w-[80%]">
            <SideBar />
          </div>
        </div>
      ) : (
        <>
          <ButtonList />
          <SideBar />
        </>
      )}
    </>
  );
};

export default Body;
