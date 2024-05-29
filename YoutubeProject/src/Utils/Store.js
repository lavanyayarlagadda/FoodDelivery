import {configureStore} from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
const store = configureStore({
    reducer:{
      sideBar : SideBarSlice
    }

})
export default store