import { configureStore } from "@reduxjs/toolkit";
import AddtoCartSlice from "./Slices/AddtoCartSlice";
const store = configureStore({
    reducer:{
        addToCart: AddtoCartSlice

    }
})
export default store