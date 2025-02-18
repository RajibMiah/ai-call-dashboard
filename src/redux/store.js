import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistStore , persistReducer } from 'redux-persist'
import storage  from "redux-persist/lib/storage";


import authReducer  from './reducerSlice/authSlice';

const persistConfig = {
    key:"root",
    storage
}

const rootReducers = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig , rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Required to prevent warnings with redux-persist
        }),
});

export const  persistor = persistStore(store);

