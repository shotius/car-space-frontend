import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ChangePasswordProps } from 'src/redux/features/auth/types';
import authService from 'src/services/authService';
import {
  isApiDefaultError,
  isApiValidationError,
} from 'src/utils/functions/typeChecker';
import {
  ApiValidationError,
  IUser,
  IUserInfo,
  LoginParams,
  RegisterParams,
  RegisterResponse,
} from '../../../../../server/shared_with_front/types/types-shared';
import { resetUserInfo, setUserInfo } from './userSlice';

interface authState {
  loading: boolean;
  error: string | null;
  loginSuccess: boolean;
  autoLoginLoading: boolean;
  autoLoginSuccess: boolean;
  sendingRecoveryMail?: boolean;
  emailInput?: string;
}

const initialState: authState = {
  loading: false,
  error: null,
  loginSuccess: false,
  autoLoginLoading: false,
  autoLoginSuccess: false,
};

export const loginUser = createAsyncThunk<
  IUserInfo,
  LoginParams,
  { rejectValue: string }
>(
  'auth/login',
  async (credentials: LoginParams, { rejectWithValue, dispatch }) => {
    try {
      const { results } = await authService.login(credentials);
      if (results) {
        localStorage.setItem('USER_ROLE', results.role);
        dispatch(setUserInfo(results));
      }
      return results;
    } catch (error: any) {
      if (error.response) {
        dispatch(resetUserInfo());
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
      localStorage.removeItem('USER_ROLE');
      dispatch(resetUserInfo());
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
      const { results: user } = await authService.me();
      if (user) {
        dispatch(setUserInfo(user));
      }
      return user;
    } catch (error) {
      dispatch(resetUserInfo());
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

export const forgotPassword = createAsyncThunk<string, string>(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const { results } = await authService.forgetPassword(email);
      return results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response &&
          (isApiDefaultError(error.response.data) ||
            isApiValidationError(error.response.data))
        ) {
          return rejectWithValue(error.response.data);
        }
      }
      return rejectWithValue('Something went wrong ;(');
    }
  }
);

/**
 * Function changes user account password
 * @param token
 * @param password
 * @returns {IUser} user
 */
export const changePassword = createAsyncThunk<IUser, ChangePasswordProps>(
  'auth/changePassword',
  async (credentials, { rejectWithValue }) => {
    try {
      const { results } = await authService.changePassword(credentials);
      return results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response &&
          (isApiDefaultError(error.response.data) ||
            isApiValidationError(error.response.data))
        ) {
          return rejectWithValue(error.response.data);
        }
      }
      return rejectWithValue('Something went wrong :(');
    }
  }
);

// -- Reducer
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInputEmail: (state, action: PayloadAction<string>) => {
      state.emailInput = action.payload;
    },
  },
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

export const { setInputEmail } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
