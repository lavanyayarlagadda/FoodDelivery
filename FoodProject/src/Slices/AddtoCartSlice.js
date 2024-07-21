import { createSlice } from "@reduxjs/toolkit";
const addtoCart = createSlice({
    name:"addToCart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearItem:(state,action)=>{
            state.items.length = 0
        }
    }
})
export const {addItem,removeItem,clearItem} =  addtoCart.actions
export default addtoCart.reducer