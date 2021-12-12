import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from 'src/services/authService';
import { axios } from 'src/utils/axios';
import {
  setAvatar,
  setFavourites,
  setIsAuthenticated,
  setRole,
  setUsername
} from './userSlice';

interface loginCredentials {
  username: string;
  password: string;
}

interface authState {
  loading: boolean;
  error: string | null;
  loginSuccess: boolean;
  autoLoginLoading: boolean;
  autoLoginSuccess: boolean;
}

const initialState: authState = {
  loading: false,
  error: null,
  loginSuccess: false,
  autoLoginLoading: false,
  autoLoginSuccess: false,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: loginCredentials, { rejectWithValue, dispatch }) => {
    try {
      const response: any = await authService.login(credentials);
      if (response.results) {
        localStorage.setItem('USER_ROLE', response.results.role);
        dispatch(setUsername(response.results.username));
        dispatch(setRole(response.results.role));
        dispatch(setIsAuthenticated(true));
      }
      return response;
    } catch (error: any) {
      if (error.response) {
        dispatch(setUsername(null));
        dispatch(setRole(null));
        dispatch(setIsAuthenticated(false));
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await axios.get('/api/auth/logout');
      dispatch(setIsAuthenticated(false));
      dispatch(setUsername(null));
      dispatch(setRole(null));
      dispatch(setFavourites([]));
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const autoLogin = createAsyncThunk(
  'auth/autoLogin',
  async (_, { dispatch }) => {
    try {
      const {results} = await authService.autoLogin();
      if (results && results.isAuthenticated) {
        dispatch(setIsAuthenticated(true));
        dispatch(setUsername(results.username));
        dispatch(setRole(results.role));
        dispatch(setAvatar(results.avatar));
      }
      return results;
    } catch (error) {
      dispatch(setUsername(null));
      dispatch(setRole(null));
      dispatch(setIsAuthenticated(false));
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /** login */
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.loginSuccess = true;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.error = 'error happened';
      state.loading = false;
    });
    /** logout */
    builder.addCase(logoutUser.fulfilled, (state) => {
      localStorage.removeItem('USER_ROLE');
      state.error = '';
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = String(action.payload);
    });
    /** autoLogin */
    builder.addCase(autoLogin.pending, (state) => {
      state.autoLoginLoading = true;
    });
    builder.addCase(autoLogin.fulfilled, (state) => {
      state.autoLoginLoading = false;
      state.autoLoginSuccess = true;
      state.error = null;
    });
    builder.addCase(autoLogin.rejected, (state) => {
      state.error = 'autoLogin failed';
      state.autoLoginLoading = false;
      state.autoLoginSuccess = false;
    });
  },
});

export const { reducer: authReducer } = authSlice;
