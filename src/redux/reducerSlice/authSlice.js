import { createSlice } from "@reduxjs/toolkit";
import { persistor } from '../store';

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
            persistor.purge()
        },
    },
    
})

 
export const { logOut } = authSlice.actions;
export default authSlice.reducer;