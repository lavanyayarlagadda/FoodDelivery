import React from "react";
import MenuIcon from "../Icons/menu-icon.svg";
import YoutubeIcon from "../Icons/youtube-icon.svg";
import SearchIcon from "../Icons/search-icon.svg";
import ProfileIcon from "../Icons/profile-icon.svg";

const Header = () => {
  return (
    <div className="flex justify-between p-6">
      <div className="flex">
        <img className="w-12 h-12" src={MenuIcon} alt="MenuIcon"></img>
        <div className="flex ml-4">
          <img className="w-12 h-12" src={YoutubeIcon} alt="YoutubeIcon"></img>
          <h1 className="text-4xl font-bold text-black">YouTube</h1>
        </div>
      </div>
      <div className="flex w-[80%]">
        <input
          className="border border-gray-300 rounded-full rounded-r-none w-[60%]"
          type="text"
        />
        <div className="border border-gray-400 rounded-full rounded-l-none bg-gray-200">
          <img className="w-8 h-8 m-2" src={SearchIcon} alt="MenuIcon"></img>
        </div>
        <img className="w-12 h-12" src={ProfileIcon} alt="ProfileIcon"></img>
      </div>
    </div>
  );
};

export default Header;
