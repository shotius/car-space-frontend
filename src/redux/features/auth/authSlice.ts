import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "services/authService";
import { axios } from "utils/axios";
import { Roles } from "constants/index";

interface loginCredentials {
  username: string;
  password: string;
}

type RoleTypes = Roles.ADMIN | Roles.DEALER;
interface authState {
  loading: boolean;
  error: string | null;
  role: RoleTypes | null;
  isAuthenticated: boolean;
  username: string | null;
}

const initialState: authState = {
  loading: false,
  error: null,
  role: null,
  isAuthenticated: false,
  username: ''
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: loginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/login`, credentials, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
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
    } catch (error: any) {
      if (error.response) {
        console.log(error.response);
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const autoLogin = createAsyncThunk("auth/autoLogin", async () => {
  try{
    const result = await authService.autoLogin()
    // if (result.isAuthenticated){
      return result
    // } 
  } catch(error) {
    console.log(error)
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /** login */
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("USER_ROLE", action.payload.role);
      state.role = action.payload.role;
      state.loading = false;
      state.isAuthenticated = true
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = String(action.payload);
      state.loading = false;
      state.isAuthenticated = false
    });
    /** logout */
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      console.log('logout fullfilled')
      localStorage.removeItem("USER_ROLE");
      state.role = null;
      state.isAuthenticated = false
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = String(action.payload);
      state.isAuthenticated = true
    });
    /** autoLogin */
    builder.addCase(autoLogin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(autoLogin.fulfilled, (state, action)=> {
      state.loading = false
      state.isAuthenticated = action.payload.isAuthenticated
      state.role = action.payload.role
      state.username = action.payload.username
    })
    builder.addCase(autoLogin.rejected, (state) => {
      state.isAuthenticated = false
    })
  },
});

// export const {  } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
