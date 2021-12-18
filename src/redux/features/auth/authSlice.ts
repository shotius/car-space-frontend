import { isApiValidationError } from 'src/utils/functions/typeChecker';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from 'src/services/authService';
import {
  ApiValidationError,
  LoginParams,
  LoginResponse,
  RegisterParams,
  RegisterResponse,
} from '../../../../../server/shared_with_front/types/types-shared';
import {
  setAvatar,
  setFavourites,
  setIsAuthenticated,
  setPhone,
  setRole,
  setUsername,
} from './userSlice';
import axios from 'axios';

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

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginParams,
  { rejectValue: string }
>(
  'auth/login',
  async (credentials: LoginParams, { rejectWithValue, dispatch }) => {
    try {
      const { results } = await authService.login(credentials);
      if (results) {
        localStorage.setItem('USER_ROLE', results.role);
        dispatch(setUsername(results.fullName));
        dispatch(setRole(results.role));
        dispatch(setIsAuthenticated(true));
        dispatch(setPhone(results.phone));
      }
      return results;
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
      await authService.logout();
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
      const { results } = await authService.autoLogin();
      if (results) {
        dispatch(setIsAuthenticated(true));
        dispatch(setUsername(results.fullName));
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

/**
 * Function registers the user
 * @param {RegistParams} credentilas
 * @returns {RegisterResponse}
 */
export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterParams,
  { rejectValue: string | ApiValidationError }
>('auth/registerUser', async (credentials, { rejectWithValue }) => {
  try {
    const { results } = await authService.register(credentials);
    return results;
  } catch (error) {
    if (isApiValidationError(error)) {
      return rejectWithValue(error);
    }
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue('Could not register the user');
  }
});

// -- Reducer
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
