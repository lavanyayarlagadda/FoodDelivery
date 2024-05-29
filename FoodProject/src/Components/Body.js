import Restaurants from "./Crads";
import Search from "./Search";
import restData from "../utils/mock.json";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [serachText, setSearchText] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const mappedData =
      data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
        (item) => {
          return item.info;
        }
      );
    setRestaurantData(mappedData);
    setFilterSearch(mappedData);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
              onChange={(event) => {
                setSearchText(event.target.value);
                value = { serachText };
              }}
            />
            <button
              className="search-button"
              onClick={() => {
                const searchFilter = restaurantData.filter((item) =>
                  item.name.toLowerCase().includes(serachText.toLowerCase())
                );
                setFilterSearch(searchFilter);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="button"
            onClick={() => {
              const filteredData = restaurantData.filter(
                (item) => item.avgRating > 4
              );
              console.log(filteredData, "FILTERDATA");
              setRestaurantData(filteredData);
            }}
          >
            Top Rating Restaurants
          </button>
          <div className="restaurants-render">
            {filterSearch.length > 0 &&
              filterSearch.map((restaurants) => (
                <Link
                  key={restaurants?.id}
                  to={`/restaurant/${restaurants?.id}`}
                  class="custom-link"
                >
                  <Restaurants resData={restaurants} />
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Body;
