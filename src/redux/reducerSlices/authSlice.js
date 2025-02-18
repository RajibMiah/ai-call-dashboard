import { createSlice } from "@reduxjs/toolkit";
import { persistor } from "../store";
import { registerUser, loginUser } from "../thunks/authThunks";

const initialState = {
  isAuthorized: false,
  isAdmin: false,
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
      state.isAuthorized = false;
      state.isAdmin = false;
      state.token = null;
      state.data = [];
      state.error = "";
      // persistor.purge();
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
        state.data = action.payload?.use ?? [];
        state.token = action.payload?.token;
        state.isAuthorized = state.token != null;
        state.isAdmin = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.token = null;
        state.error = action.payload?.error?.message ?? "Something went wrong.";
      })

      //Handle Login
      .addCase(loginUser.pending, (state, action) => {
        console.log("action dispatched", action);
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload?.use ?? [];
        state.token = action.payload?.token;
        state.isAuthorized = state.token != null;
        state.isAdmin = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.token = null;
        state.error = action.payload?.error?.message ?? "Something went wrong.";
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
