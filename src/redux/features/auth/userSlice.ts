import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import userServices from 'src/services/userServices';
import { IUser, RoleTypes } from './types';

const initialState: IUser = {
  username: null,
  role: null,
  isAuthenticated: false,
  favourites: [],
};

export const likeCarThunk = createAsyncThunk(
  'user/likeCar',
  async (lotNumber: string, { dispatch }) => {
    const result = await userServices.likeCar(lotNumber);
    console.log('result: ', result);
    if (result && result.success) {
      dispatch(getAllFavouritesThunk());
    }
    return result;
  }
);

export const getAllFavouritesThunk = createAsyncThunk(
  'user/getFavourites',
  async () => {
    return await userServices.getAllLikedCars();
  }
);

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
    setFavourites: (state, action: PayloadAction<string[]>) => {
      state.favourites = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllFavouritesThunk.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.favourites = action.payload;
      }
    );
  },
});

export const { setUsername, setRole, setIsAuthenticated } =
  userInfoSlice.actions;
export const { reducer: UserInfo } = userInfoSlice;
