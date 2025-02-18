import { createSlice } from "@reduxjs/toolkit";
import { persistor } from "../store";
import { registerUser, loginUser } from "../thunks/authThunks";

const initialState = {
  isAuthorized: false,
  token: null,
  isLoading: false,
  data: [],
  error: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logOut: (state, action) => {
      persistor.purge();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthorized = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //Handle Login
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (action, state) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(loginUser.rejected, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
