import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axios } from "utils/axios";
import { Roles } from "utils/constants/roles";

interface loginCredentials {
  username: string;
  password: string;
}

type RoleTypes = Roles.ADMIN | Roles.DEALER;
interface authState {
  loading: boolean;
  loginSuccess: boolean;
  error: string | null;
  role: RoleTypes | null;
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

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
       await axios.get("/api/logout");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message)
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
    /** logout */
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      localStorage.removeItem("USER_ROLE")
      state.loginSuccess = false
      state.role = null
    })
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = String(action.payload)
    })
  },
});

export const { reducer: authReducer } = authSlice;
