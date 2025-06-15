import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts:[],
};
 export const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        loadcart :(state,action)=>{
            state.carts = action.payload;
        }
    }
});

export const {loadcart} = cartslice.actions;
export default cartslice.reducer;