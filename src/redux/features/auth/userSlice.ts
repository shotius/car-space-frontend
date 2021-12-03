import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import userServices from 'src/services/userServices';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';
import { IUser, RoleTypes } from './types';

const initialState: IUser = {
  username: null,
  role: null,
  isAuthenticated: false,
  favouriteLotNumbers: [],

  favouriteCars: [],
  favouriteCarsFetching: false,
  favouriteCarsFetchSuccess: true,
  favouriteCarsFetchError: null,
};

export const likeCarThunk = createAsyncThunk(
  'user/likeCar',
  async (lotNumber: string, { dispatch }) => {
    console.log('clicked');
    try {
      const result = await userServices.likeCar(lotNumber);
      console.log('result: ', result);
      if (result && result.success) {
        dispatch(getAllFavouriteLotNumbersThunk());
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllFavouriteLotNumbersThunk = createAsyncThunk(
  'user/getFavourites',
  async () => {
    return await userServices.getAllLikedCars();
  }
);

export const getAllFavouriteCarsThunk = createAsyncThunk<ICar[]>(
  'getAllFavouriteCarsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const result = await userServices.getAllFavouriteCars();
      return result;
    } catch (error) {
      return rejectWithValue('some');
    }
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
      state.favouriteLotNumbers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllFavouriteLotNumbersThunk.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.favouriteLotNumbers = action.payload;
      }
    );
    builder.addCase(getAllFavouriteCarsThunk.pending, (state) => {
      state.favouriteCarsFetching = true;
      state.favouriteCarsFetchError = null;
      state.favouriteCarsFetchSuccess = false;
    });
    builder.addCase(
      getAllFavouriteCarsThunk.fulfilled,
      (state, action: PayloadAction<ICar[]>) => {
        state.favouriteCarsFetching = false;
        state.favouriteCarsFetchSuccess = true;
        state.favouriteCars = action.payload;
      }
    );
    builder.addCase(
      getAllFavouriteCarsThunk.rejected,
      (state, action) => {
        state.favouriteCarsFetching = false;
        state.favouriteCarsFetchSuccess = false;
        state.favouriteCarsFetchError = action.payload as string;
      }
    );
  },
});

export const { setUsername, setRole, setIsAuthenticated, setFavourites } =
  userInfoSlice.actions;
export const { reducer: UserInfo } = userInfoSlice;
