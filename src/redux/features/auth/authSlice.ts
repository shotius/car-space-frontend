import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from "utils/axios";

interface loginCredentials {
  username: string;
  password: string;
}

interface authState {
  loading: boolean;
  loginSuccess: boolean;
  error: string | null;
  role: "admin" | "dealer" | null;
}

const initialState: authState = {
  loading: false,
  loginSuccess: false,
  error: null,
  role: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: loginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/login`, credentials, {
        withCredentials: true,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /** login */
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("USER_ROLE", action.payload.role);
      state.loginSuccess = true;
      state.role = action.payload.role;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = String(action.payload);
    });
  },
});

export const { reducer: authReducer } = authSlice;
