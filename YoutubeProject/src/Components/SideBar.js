import React from 'react';
import HomeIcon from '../Icons/home-icon.svg';
import SubscriptionsIcon from '../Icons/subscriptions-icon.svg';
import ShortsIcon from '../Icons/shorts-icon.svg';
import YouIcon from '../Icons/you-icon.svg';
import { useSelector } from 'react-redux';

const SideBar = () => {

  const {menu} = useSelector(store=>store.sideBar);
    return (
      <>
        {menu ? (
          <div className="p-6 flex-col space-y-4 bg-white w-[30%] shadow-lg -mt-[4.5rem]">
            <div className="flex">
              <img className="w-8 h-8" src={HomeIcon} alt="HomeIcon" />
              <h4 className="text-black text-xl ml-4">Home</h4>
            </div>
            <div className="flex">
              <img className="w-8 h-8" src={ShortsIcon} alt="ShortsIcon" />
              <h4 className="text-black text-xl ml-4">Shorts</h4>
            </div>
            <div className="flex">
              <img className="w-8 h-8" src={SubscriptionsIcon} alt="SubscriptionsIcon" />
              <h4 className="text-black text-xl ml-4">Subscriptions</h4>
            </div>
            <div className="flex">
              <img className="w-8 h-8" src={YouIcon} alt="YouIcon" />
              <h4 className="text-black text-xl ml-4">You</h4>
            </div>
          </div>
        ):(
          <div className="p-6 flex-col space-y-8 shadow-sm -mt-[4.5rem] ">
          <div className="flex-col">
            <img className="w-8 h-8" src={HomeIcon} alt="HomeIcon" />
            <h4 className="text-black text-xl">Home</h4>
          </div>
          <div className="flex-col">
            <img className="w-8 h-8" src={ShortsIcon} alt="ShortsIcon" />
            <h4 className="text-black text-xl self-center">Shorts</h4>
          </div>
          <div className="flex-col">
            <img className="w-8 h-8" src={SubscriptionsIcon} alt="SubscriptionsIcon" />
            <h4 className="text-black text-xl">Subscriptions</h4>
          </div>
          <div className="flex-col">
            <img className="w-8 h-8" src={YouIcon} alt="YouIcon" />
            <h4 className="text-black text-xl">You</h4>
          </div>
        </div>
        )}
      </>
    );
  }

export default SideBar