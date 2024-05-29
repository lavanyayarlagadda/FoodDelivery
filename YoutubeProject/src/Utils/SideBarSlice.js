import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name:"sideBar",
    initialState:{
       menu: false,
    },
    reducers:{
       toggleMenu:(state)=>{
       state.menu = !state.menu
       }
    }
})
export const {toggleMenu} = sideBarSlice.actions;
export default sideBarSlice.reducer;