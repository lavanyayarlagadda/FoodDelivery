import { createSlice } from "@reduxjs/toolkit";

const addtoCart = createSlice({
  name: "addToCart",
  initialState: {
    items: [],
    count: 0,
    cartItems: {},
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const itemId = item.card.info.id;
      if (!state.cartItems[itemId]) {
        state.items.push(action.payload)
        state.cartItems[itemId] = { ...item, count: 1 };
      } else {
        state.cartItems[itemId].count += 1;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;                                                                  
      if (state.cartItems[itemId]) {
        if (state.cartItems[itemId].count > 1) {
          state.cartItems[itemId].count -= 1;
        } else {
            state.cartItems[itemId].count = 0;
        }
        state.count -= 1;
      }
    },
    clearItems: (state) => {
      state.items.length = 0;
      state.cartItems = {};
      state.count = 0;
    },
    setCartItems: (state, action) => {
      const itemId = action.payload;
      console.lo
      if (!state.cartItems[itemId]) {
        state.cartItems[itemId] = { count: 1 };
      } else {
        state.cartItems[itemId].count += 1;
      }
    },
  },
});

export const { addItem, removeItem, clearItems, setCount, setCartItems } = addtoCart.actions;
export default addtoCart.reducer;
