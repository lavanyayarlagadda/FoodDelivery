import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name:"sideBar",
    initialState:{
       menu: false,
       menuEmpty:false,
    },
    reducers:{
       toggleMenu:(state)=>{
       state.menu = !state.menu
       },
       menuEmptyState:(state,action)=>{
         state.menuEmpty= action.payload;
       }
    }
})
export const {toggleMenu,menuEmptyState} = sideBarSlice.actions;
export default sideBarSlice.reducer;