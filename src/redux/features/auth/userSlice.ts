import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import userServices from 'src/services/userServices';
import {
  ICarDealer,
  IUser,
  RoleTypes
} from '../../../../../server/shared_with_front/types/types-shared';
import { isApiDefaultError } from './../../../utils/functions/typeChecker';
import { UsertInfoState } from './types';

const initialState: UsertInfoState = {
  username: null,
  role: null,
  isAuthenticated: false,
  favouriteCarIds: [],

  favouriteCars: [],
  favouriteCarsFetching: false,
  favouriteCarsFetchSuccess: true,
  favouriteCarsFetchError: null,

  likingCar: false,
};

export const likeCarThunk = createAsyncThunk<
  IUser,
  string,
  { rejectValue: string }
>('user/likeCar', async (carId: string, { rejectWithValue }) => {
  try {
    const { results } = await userServices.likeCar(carId);
    return results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && isApiDefaultError(error.response.data)) {
        return rejectWithValue(error.response.data.error!);
      }
    }
  }
  return rejectWithValue('Could not like a car ;(');
});

export const getAllFavouriteLotNumbersThunk = createAsyncThunk<
  string[],
  any, 
  { rejectValue: string }
>('user/getFavourites', async (_, { rejectWithValue }) => {
  try {
    const { results } = await userServices.getAllLikedCars();
    return results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && isApiDefaultError(error.response.data)) {
        return rejectWithValue('Could on');
      }
    }
    return rejectWithValue('COuld not get favourite car ids')
  }
});

export const getAllFavouriteCarsThunk = createAsyncThunk<
  ICarDealer[],
  any,
  { rejectValue: string }
>('getAllFavouriteCarsThunk', async (_, { rejectWithValue }) => {
  try {
    const { results } = await userServices.getAllFavouriteCars();
    return results;
  } catch (error) {
    return rejectWithValue('bad error');
  }
});

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
    const { results } = await userServices.setUserProfileAvatar(formdata);
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
      state.favouriteCarIds = action.payload;
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
        state.favouriteCarIds = action.payload;
      }
    );

    // get favourite cars
    builder.addCase(getAllFavouriteCarsThunk.pending, (state) => {
      state.favouriteCarsFetching = true;
      state.favouriteCarsFetchError = null;
      state.favouriteCarsFetchSuccess = false;
    });
    builder.addCase(getAllFavouriteCarsThunk.fulfilled, (state, action) => {
      state.favouriteCarsFetching = false;
      state.favouriteCarsFetchSuccess = true;
      state.favouriteCars = action.payload;
    });
    builder.addCase(getAllFavouriteCarsThunk.rejected, (state, action) => {
      state.favouriteCarsFetching = false;
      state.favouriteCarsFetchSuccess = false;
      state.favouriteCarsFetchError = action.payload as string;
    });

    // avatar change
    builder.addCase(setUserAvatarThunk.fulfilled, (state, action) => {
      state.avatar = action.payload;
    });

    // like a car 
    builder.addCase(likeCarThunk.pending, (state) => {
      state.likingCar = true
    })
    builder.addCase(likeCarThunk.fulfilled, (state, action) => {
      state.likingCar = false
      state.favouriteCarIds = action.payload.favourites.map(id => id.toString())
    })
    builder.addCase(likeCarThunk.rejected, (state) => {
      state.likingCar = false
    })
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
