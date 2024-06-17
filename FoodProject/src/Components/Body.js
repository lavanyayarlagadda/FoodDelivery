import React, { useEffect, useState } from "react";
import Restaurants from "./Cards";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const mappedData =
      data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
        (item) => item.info
      );
    setRestaurantData(mappedData);
    setFilteredSearch(mappedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const searchFilter = restaurantData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredSearch(searchFilter);
  };

  const handleTopRated = () => {
    const filteredData = restaurantData.filter((item) => item.avgRating > 4);
    setFilteredSearch(filteredData);
  };

  return (
    <div>
      {restaurantData.length === 0 ? (
        <div className="shimmering">
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
        <h1 className="shimmering-cards">
          <h4 className="shimmer-name"></h4>
        </h1>
      </div>
      ) : (
        <div className="body">
          <div className="search">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search restaurants"
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <button className="button" onClick={handleTopRated}>
            Top Rated Restaurants
          </button>
          <div className="restaurants-render">
            {filteredSearch.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="custom-link"
              >
                <Restaurants resData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
