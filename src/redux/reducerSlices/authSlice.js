import { createSlice } from "@reduxjs/toolkit";
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
    logOut: (state) => {
      state.isAuthorized = false;
      state.isAdmin = false;
      state.token = null;
      state.data = [];
      state.error = "";
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
        state.data = action.payload?.user ?? [];
        state.token = action.payload?.token;
        state.isAuthorized = !!state.token;
        state.isAdmin = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.token = null;
        state.error = action.payload?.error?.message ?? "Something went wrong.";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload?.user ?? [];
        state.token = action.payload?.token;
        state.isAuthorized = !!state.token;
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
