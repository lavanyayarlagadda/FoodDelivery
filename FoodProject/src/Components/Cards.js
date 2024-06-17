import React from "react";
import { restaurant_URL } from "../utils/utils";

const Restaurants = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;

  return (
    <div className="restaurant-card">
      <img
        className="foodItem-img"
        src={`${restaurant_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <h4 className="res-name">{name}</h4>
      <h5 className="res-foodlist">
        {cuisines && cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h5>
      <p className="res-rating">{avgRating} rating</p>
    </div>
  );
};

export default Restaurants;
