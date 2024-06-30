import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantsDetails = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const originalUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(originalUrl)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();
        if (result && result.contents) {
          const parsedData = JSON.parse(result.contents);
          setResData(parsedData.data); 
        }
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    if (resId) {
      fetchRestaurantData();
    }
  }, [resId]);

  function stripHtmlTags(str) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.body.textContent || "";
  }

  if (resData === null) return (
    <div className="shimmerRestaurantDetails">
      <div className="shimmer shimmerLargeText"></div>
      <div className="shimmer shimmerText"></div>
      <div className="shimmer shimmerCircle"></div>
      <div className="shimmer shimmerText"></div>
      <div className="shimmer shimmerText"></div>
      <div className="shimmer shimmerText"></div>
      <div className="shimmer shimmerLargeText"></div>
    </div>
  );
  

  const { text } = resData?.cards[0]?.card?.card;
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resData?.cards[2]?.card?.card?.info;
  const { slaString } = resData?.cards[2]?.card?.card?.info?.sla;
  const { message } = resData?.cards[2]?.card?.card?.info?.feeDetails;
  const sanitizedText = stripHtmlTags(message);
  const { descriptionList } =
    resData?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo;
  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return (
    <div className="resDetails">
      <h1>{text}</h1>
      <div className="restaurantDetails">
        <p className="avgRatingRes">
          {avgRating} ({totalRatingsString})
          <span className="costRes"> . {costForTwoMessage}</span>
        </p>
        <div className="cuisines">
          {cuisines?.map((item, index) => (
            <p key={index}>
              {item}
              {index < cuisines.length - 1 && ","}
            </p>
          ))}
        </div>
        <ul>
          <li>
            <span className="Outlet">Outlet</span>{" "}
            <span className="areaName">{areaName}</span>
          </li>
          <li className="Outlet2">{slaString}</li>
        </ul>
        <p className="enrichedText">{sanitizedText}</p>
      </div>
      <div>
        <h1>Deals for You</h1>
        <div className="deals1">
          {descriptionList.map((item, index) => {
            const firstPart = item?.meta?.split("|");
            return (
              <div key={index} className="deals">
                <div className="parts">
                  <p>{firstPart && firstPart[0]}</p>
                  {firstPart && <p className="second">{firstPart[1]}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Recommended ({itemCards ? itemCards.length : "0"})</h2>
        <div className="menuList">
          {itemCards?.map((item, index) => (
            <div key={item?.card?.info?.id} className="menuItem">
              <h3 className="itemName">{item?.card?.info?.name}</h3>
              <p className="price">
                {item?.card?.info?.price
                  ? "RS." + item?.card?.info?.price
                  : item?.card?.info?.defaultPrice
                  ? "RS." + item?.card?.info?.defaultPrice
                  : "Rs." + "0000"}
              </p>
              <p className="description">{item?.card?.info?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsDetails;
