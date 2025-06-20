import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[]
};
 export const productslice = createSlice({
    name:"product",
    initialState,
    reducers:{
        loadproduct :(state,action)=>{
            state.products = action.payload;
        },
         loadlazyproduct :(state,action)=>{
            state.products =[...state.products, ...action.payload]
        }
    }
});

export const {loadproduct,loadlazyproduct} = productslice.actions;
export default productslice.reducer;