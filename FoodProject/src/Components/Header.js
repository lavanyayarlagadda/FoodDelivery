import React from "react";
import FoodIcon from "../Icons/food-logo.svg";
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <div className="header">
        <img className="img" src={FoodIcon} alt="Food-Logo"></img>
        <ul className="nav">
          <li className="nav-list">
            <Link to='/' class="custom-link">HOME</Link>  </li>
          <li className="nav-list"><Link to='/aboutUs' class="custom-link"> ABOUT US</Link> </li>
          <li className="nav-list"><Link to='/contactUs' class="custom-link"> CONTACT US </Link></li>
          <li className="nav-list"> CART </li>
        </ul>
      </div>
    );
  };
  export default Header;