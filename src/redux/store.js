import { configureStore, combineReducers } from "@reduxjs/toolkit"; // ✅ FIXED IMPORT
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./reducerSlices/authSlice";

// Persist Config
const persistConfig = {
  key: "root",
  storage,
};

// Combine Reducers
const rootReducers = combineReducers({
  auth: authReducer,
});

// Apply Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Prevents warnings for redux-persist
    }),
});

export const persistor = persistStore(store);
