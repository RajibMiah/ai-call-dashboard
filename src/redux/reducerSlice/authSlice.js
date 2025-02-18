import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isAuthorized: false,
    isLoading: false,
    data :[],
    error: ""
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{
        logOut: (state , action)=>{
            state.data = [];
            state.isAuthorized = false;
        },
    },
    
})

 
export const { logOut } = authSlice.actions;
export default authSlice.reducer;