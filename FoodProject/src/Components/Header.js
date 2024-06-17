import React from "react";
import FoodIcon from "../Icons/foodLogo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FoodIcon} alt="Food-Logo" />
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutUs" className="nav-link">ABOUT US</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactUs" className="nav-link">CONTACT US</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">CART</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
