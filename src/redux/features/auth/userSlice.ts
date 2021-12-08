import { isApiDefaultError } from '../../../utils/functions/typeChecker';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import userServices from 'src/services/userServices';
import {
  ICar,
  RoleTypes,
} from '../../../../../server/shared_with_front/types/types-shared';
import { IUser } from './types';
import axios from 'axios';

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

/**
 * @param formdata: file
 * @returns : url of avatar or undefined, or in case of error error message
 */
export const setUserAvatarThunk = createAsyncThunk<
  // CloudinaryResponse,
  string | undefined, 
  FormData,
  { rejectValue: string | null }
>('setUserAvatarThunk', async (formdata: FormData, { rejectWithValue }) => {
  try {
    const {results} = await userServices.setUserProfileAvatar(formdata);
    console.log(results);
    return results.url;
  } catch (error) {
    console.log('error: ', error);
    if (axios.isAxiosError(error) && error.response) {
      if (isApiDefaultError(error.response.data)) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
    return rejectWithValue('some error happend' + error);
  }
});

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
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
  },
  extraReducers: (builder) => {
    // get all favourite lot numbers
    builder.addCase(
      getAllFavouriteLotNumbersThunk.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.favouriteLotNumbers = action.payload;
      }
    );

    // get favourite cars
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
    builder.addCase(getAllFavouriteCarsThunk.rejected, (state, action) => {
      state.favouriteCarsFetching = false;
      state.favouriteCarsFetchSuccess = false;
      state.favouriteCarsFetchError = action.payload as string;
    });

    // avatar change
    builder.addCase(setUserAvatarThunk.fulfilled, (state, action) => {
        state.avatar = action.payload;
    });
  },
});

export const {
  setUsername,
  setRole,
  setIsAuthenticated,
  setFavourites,
  setAvatar,
} = userInfoSlice.actions;
export const { reducer: UserInfo } = userInfoSlice;
