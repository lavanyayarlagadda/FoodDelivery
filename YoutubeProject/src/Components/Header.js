import React from "react";
import MenuIcon from "../Icons/menu-icon.svg";
import YoutubeIcon from "../Icons/youtube-icon.svg";
import SearchIcon from "../Icons/search-icon.svg";
import ProfileIcon from "../Icons/profile-icon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/SideBarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Menu and Logo */}
      <div className="flex items-center">
        <img
          className="w-8 h-8 cursor-pointer"
          src={MenuIcon}
          alt="MenuIcon"
          onClick={handleToggleMenu}
        />
        <div className="flex items-center ml-4">
          <img className="w-8 h-8" src={YoutubeIcon} alt="YoutubeIcon" />
          <h1 className="text-2xl font-bold text-black ml-2">YouTube</h1>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex flex-grow mx-6 max-w-2xl">
        <input
          className="border border-gray-300 rounded-l-full w-full px-4 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
        />
        <button className="flex items-center justify-center border border-gray-300 bg-gray-100 rounded-r-full px-4 hover:bg-gray-200">
          <img className="w-6 h-6" src={SearchIcon} alt="SearchIcon" />
        </button>
      </div>

      {/* Profile icon */}
      <div className="flex items-center">
        <img className="w-8 h-8 rounded-full" src={ProfileIcon} alt="ProfileIcon" />
      </div>
    </div>
  );
};

export default Header;
