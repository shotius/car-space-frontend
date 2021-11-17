import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from 'src/services/authService';
import { axios } from 'src/utils/axios';
import { ApiResponse } from '../../../../../server/shared_with_front/types/types-shared';
import { setIsAuthenticated, setRole, setUsername } from './userSlice';

interface loginCredentials {
  username: string;
  password: string;
}

interface authState {
  loading: boolean;
  error: string | null;
  loginSuccess: boolean;
}

const initialState: authState = {
  loading: false,
  error: null,
  loginSuccess: false
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: loginCredentials, { rejectWithValue, dispatch }) => {
    try {
      const response: ApiResponse = await authService.login(credentials);
      if (response.results) {
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
      dispatch(setUsername(null))
      dispatch(setRole(null))
      dispatch(setIsAuthenticated(false))
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const autoLogin = createAsyncThunk('auth/autoLogin', async (_, {dispatch}) => {
  try {
    const result = await authService.autoLogin();
    if (result && result.isAuthenticated) {
      dispatch(setUsername(result.username))
      dispatch(setRole(result.role))
      dispatch(setIsAuthenticated(true))
    }
    return result;
  } catch (error) {
    dispatch(setUsername(null))
    dispatch(setRole(null))
    dispatch(setIsAuthenticated(false))
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /** login */
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const payload: ApiResponse = action.payload as ApiResponse;
      localStorage.setItem('USER_ROLE', payload.results.role);
      state.loginSuccess = true
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.error = 'error happened';
      state.loading = false;
    });
    /** logout */
    builder.addCase(logoutUser.fulfilled, (state) => {
      localStorage.removeItem('USER_ROLE');
      state.error = ''
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = String(action.payload);
    });
    /** autoLogin */
    builder.addCase(autoLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(autoLogin.fulfilled, (state) => {
      state.loading = false;
      state.error = null
    });
    builder.addCase(autoLogin.rejected, (state) => {
      state.error = 'autoLogin failed'
    });
  },
});

export const { reducer: authReducer } = authSlice;
