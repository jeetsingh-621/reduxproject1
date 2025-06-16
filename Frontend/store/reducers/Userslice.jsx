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
        },
        removeuser:(state,action)=>{
            state.users = null;
        }
    }
});

export const {loaduser,removeuser} = userslice.actions;
export default userslice.reducer;