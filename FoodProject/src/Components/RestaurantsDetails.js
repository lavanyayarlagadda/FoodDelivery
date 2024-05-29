import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantsDetails = () => {
    const {resId} = useParams();
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const [resData, setResData] = useState(null);
  const fetchRestaurantData = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await res.json();
    setResData(jsonData.data);
  };
  function stripHtmlTags(str) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.body.textContent || "";
  }

  if (resData === null) return <h1>No Data Available</h1>;
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
    <div class="resDetails">
      <h1>{text}</h1>
      <div class="restaurantDetails">
        <div>
          <p class="avgRatingRes">
            {avgRating} ({totalRatingsString})
            <span className="costRes"> . {costForTwoMessage}</span>
          </p>
        </div>
        <div class="cuisines">
          {cuisines?.map((item, index) => (
            <p key={index}>
              {item}
              {index < cuisines.length - 1 && ","}
            </p>
          ))}
        </div>
        <ul>
          <li>
            <span class="Outlet">Outlet</span>{" "}
            <span class="areaName">{areaName}</span>
          </li>
          <li class="Outlet2">{slaString}</li>
        </ul>
        <p className="enrichedText1"></p>
        <p className="enrichedText">{sanitizedText}</p>
      </div>
      <div>
        <h1> Deals for You</h1>
        <div className="deals1">
          {descriptionList.map((item, index) => {
            const firstPart = item?.meta?.split("|");
            return (
              <div key={index} className="deals">
                <div class="parts">
                  <p>{firstPart && firstPart[0]}</p>
                  {firstPart && <p class="second">{firstPart[1]}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="enrichedText1"></p>
        <h2>Recommended ({itemCards ? itemCards?.length:"0"})</h2>
        <div className="menuList">
          {itemCards?.map((item, index) => {
            return (
              <>
                <h3 class="itemName" key={item?.card?.info?.id}>
                  {item?.card?.info?.name}
                </h3>
                <p class="price">
                  {item?.card?.info?.price
                    ? "RS." + item?.card?.info?.price
                    : item?.card?.info?.defaultPrice
                    ? "RS." + item?.card?.info?.defaultPrice
                    : "Rs." + "0000"}
                </p>
                <h3 class="description" key={item?.card?.info?.id}>
                  {item?.card?.info?.description}
                </h3>
                <p className="enrichedText1"></p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsDetails;
