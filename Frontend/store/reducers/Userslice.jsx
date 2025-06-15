import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users:null,
};
 export const userslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loaduser :(state,action)=>{
            state.users=action.payload;
        }
    }
});

export const {loaduser} = userslice.actions;
export default userslice.reducer;