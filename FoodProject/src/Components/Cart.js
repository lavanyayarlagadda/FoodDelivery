import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restaurantCrads_URL } from "../utils/utils";
import { removeItem, addItem, clearItem } from "../Slices/AddtoCartSlice";

const Cart = () => {
  const { items } = useSelector((store) => store.addToCart);
  console.log(items, "ITEMSOFCART");
  const dispatch = useDispatch();
  const handleAddTocart = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const handleClearItem = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <div className="">
        <div className="text-black font-bold text-center mt-6 text-2xl flex flex-col justify-center">
          Cart
          <div className="flex justify-center">
            <button
              className="text-white w-1/2 flex justify-center mt-4  bg-black font-bold text-center text-2xl rounded-lg mb-6"
              onClick={() => handleClearItem()}
            >
              Clear Data
            </button>
          </div>
        </div>
        {items.length===0 ? <div className="text-black font-bold text-center mt-6 text-2xl flex flex-col justify-center"> No items added to cart please Add </div>:        <div className="menuList">
          <div>
            {items?.map((item) => (
              <div key={item?.card?.info?.id} className="menuItem">
                <div className="flex gap-4">
                  <div>
                    <h3 className="itemName">{item?.card?.info?.name}</h3>
                    <p className="text-green-700 font-bold text-xl">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </p>
                    <p className="price">
                      {item?.card?.info?.price
                        ? "RS." + item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice
                        ? "RS." +
                          item?.card?.info?.defaultPrice.toString().slice(0, 3)
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

                    <div className="bg-black rounded-lg text-white font-bold p-1 absolute -top-1 left-1 flex gap-6">
                      <button
                        className="pl-4"
                        onClick={() => handleRemoveItem(item)}
                      >
                        -
                      </button>

                      <p>ADD</p>
                      <button
                        className="pr-4"
                        onClick={() => handleAddTocart(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>}

      </div>
    </div>
  );
};

export default Cart;
