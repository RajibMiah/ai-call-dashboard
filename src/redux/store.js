import { configureStore } from "@reduxjs/toolkit";


import authReducer  from './reducerSlice/authSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer
    }
});

