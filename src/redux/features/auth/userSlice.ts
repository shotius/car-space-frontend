import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, RoleTypes } from './types';

const initialState: IUser = {
  username: null,
  role: null,
  isAuthenticated: false,
};

const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
    setRole: (state, action: PayloadAction<RoleTypes | null>) => {
      state.role = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setUsername, setRole, setIsAuthenticated } = userInfoSlice.actions;
export const { reducer: UserInfo } = userInfoSlice;
