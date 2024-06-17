import React from "react";
import HomeIcon from "../Icons/home-icon.svg";
import SubscriptionsIcon from "../Icons/subscriptions-icon.svg";
import ShortsIcon from "../Icons/shorts-icon.svg";
import YouIcon from "../Icons/you-icon.svg";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { menu, menuEmpty } = useSelector((store) => store.sideBar);

  return (
    <>
      {menu ? (
        <div className="p-6 flex flex-col space-y-4 bg-white w-[30%] shadow-lg -mt-[4.5rem]">
          <ul>
            <li className="flex items-center">
              <img className="w-8 h-8" src={HomeIcon} alt="HomeIcon" />
              <h4 className="text-black text-xl ml-4">Home</h4>
            </li>
            <li className="flex items-center">
              <img className="w-8 h-8" src={ShortsIcon} alt="ShortsIcon" />
              <h4 className="text-black text-xl ml-4">Shorts</h4>
            </li>
            <li className="flex items-center">
              <img className="w-8 h-8" src={SubscriptionsIcon} alt="SubscriptionsIcon" />
              <h4 className="text-black text-xl ml-4">Subscriptions</h4>
            </li>
            <li className="flex items-center">
              <img className="w-8 h-8" src={YouIcon} alt="YouIcon" />
              <h4 className="text-black text-xl ml-4">You</h4>
            </li>
          </ul>
        </div>
      ) : !menuEmpty ? (
        <div></div>
      ) : (
        <div className="p-6 flex flex-col items-center space-y-8 shadow-sm -mt-[4.5rem]">
          <ul className="space-y-8">
            <li className="flex flex-col items-center">
              <img className="w-8 h-8" src={HomeIcon} alt="HomeIcon" />
              <h4 className="text-black text-sm mt-2">Home</h4>
            </li>
            <li className="flex flex-col items-center">
              <img className="w-8 h-8" src={ShortsIcon} alt="ShortsIcon" />
              <h4 className="text-black text-sm mt-2">Shorts</h4>
            </li>
            <li className="flex flex-col items-center">
              <img className="w-8 h-8" src={SubscriptionsIcon} alt="SubscriptionsIcon" />
              <h4 className="text-black text-sm mt-2">Subscriptions</h4>
            </li>
            <li className="flex flex-col items-center">
              <img className="w-8 h-8" src={YouIcon} alt="YouIcon" />
              <h4 className="text-black text-sm mt-2">You</h4>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
