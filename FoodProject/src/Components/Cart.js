import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restaurantCrads_URL } from "../utils/utils";
import { removeItem, addItem, clearItems,setCartItems } from "../Slices/AddtoCartSlice";

const Cart = () => {
  const { items,cartItems } = useSelector((store) => store.addToCart);
  const dispatch = useDispatch();
  const handleAddTocart = (item) => {
    const itemId = item?.card?.info?.id;
    if (!cartItems[itemId]) {
      dispatch(addItem(item));
    } else {
      dispatch(setCartItems(itemId));
    }
  };
  const handleRemoveItem = (item) => {
    const itemId = item?.card?.info?.id;
    dispatch(removeItem(itemId));
  };
  const handleClearItem = () => {
    dispatch(clearItems());
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
            {items?.map((item) => {
              const itemId = item?.card?.info?.id;
              const itemCount = cartItems[itemId]?.count || 0;
              return (
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
                      <button
                        className="pr-4"
                        onClick={() => handleAddTocart(item)}
                      >
                        + {itemCount > 0 && itemCount}
                      </button>
                    </div>
                  </div>
                </div>
              </div>)
})}
          </div>
        </div>}

      </div>
    </div>
  );
};

export default Cart;
