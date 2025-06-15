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
        }
    }
});

export const {loadproduct} = productslice.actions;
export default productslice.reducer;