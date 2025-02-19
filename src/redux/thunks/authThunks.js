import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/auth/register`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/auth/login`,
        credentials
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);
