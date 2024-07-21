import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantCrads_URL } from "../utils/utils";
import downArrow from "../Icons/downArrow.svg";
import upArrow from "../Icons/upArrow.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../Slices/AddtoCartSlice";

const RestaurantsDetails = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState(null);
  const [openCards, setOpenCards] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const originalUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
        const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
          originalUrl
        )}`;
        const response = await fetch(apiUrl);
        const result = await response.json();
        if (result?.contents) {
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

  if (resData === null)
    return (
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

  const { text } = resData?.cards[0]?.card?.card ?? {};
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resData?.cards[2]?.card?.card?.info ?? {};
  const { slaString } = resData?.cards[2]?.card?.card?.info?.sla ?? {};
  const { message } = resData?.cards[2]?.card?.card?.info?.feeDetails ?? {};
  const sanitizedText = stripHtmlTags(message);
  const { descriptionList } =
    resData?.cards[2]?.card?.card?.info?.aggregatedDiscountInfo ?? {};

  const handleButtonClick = (index) => {
    setOpenCards(openCards === index ? null : index);
  };

  const handleAddTocart = (item) => {
    dispatch(addItem(item));
  };
  

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
            <p key={index + 1}>
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
              <div key={index + 1} className="deals">
                <div className="parts">
                  <p>{firstPart?.[0]}</p>
                  {firstPart && <p className="second">{firstPart[1]}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (item, index) => {
            return (
              <div key={index + 1}>
                {item?.card?.card?.title && (
                  <>
                    <div className="flex justify-between  mb-8">
                      <h2 className="text-black font-semibold text-xl">
                        {item?.card?.card?.title &&
                          `${item?.card?.card?.title} (${
                            item?.card?.card?.itemCards
                              ? item?.card?.card?.itemCards?.length
                              : "0"
                          })`}
                      </h2>
                      <button
                        onClick={() => {
                          handleButtonClick(index);
                        }}
                      >
                        <img
                          className="w-7"
                          src={openCards === index ? upArrow : downArrow}
                          alt="downArrow"
                        />
                      </button>
                    </div>
                    <div className="border-gray-400 border-[4px] my-6"></div>
                  </>
                )}
                {openCards === index && item?.card?.card?.title && (
                  <>
                    <div className="menuList">
                      <div>
                        {item?.card?.card?.itemCards?.map((item) => (
                          <div key={item?.card?.info?.id} className="menuItem">
                            <div className="flex gap-4">
                              <div>
                                <h3 className="itemName">
                                  {item?.card?.info?.name}
                                </h3>
                                <p className="text-green-700 font-bold text-xl">
                                  {
                                    item?.card?.info?.ratings?.aggregatedRating
                                      ?.rating
                                  }
                                </p>
                                <p className="price">
                                  {item?.card?.info?.price
                                    ? "RS." + item?.card?.info?.price / 100
                                    : item?.card?.info?.defaultPrice
                                    ? "RS." +
                                      item?.card?.info?.defaultPrice
                                        .toString()
                                        .slice(0, 3)
                                    : "Rs." + "0000"}
                                </p>
                                <p className="description">
                                  {item?.card?.info?.description}
                                </p>
                              </div>
                              <div className="relative">
                                <img
                                  className="w-96 rounded-2xl shadow-lg h-20"
                                  src={`${restaurantCrads_URL}${item?.card?.info?.imageId}`}
                                  alt={item?.card?.info?.name}
                                />
                                <button
                                  className="bg-black rounded-lg text-white font-bold p-1 absolute -top-1 left-1"
                                  onClick={() => handleAddTocart(item)}
                                >
                                  ADD +
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-gray-400 border-[4px] my-6"></div>
                  </>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantsDetails;
