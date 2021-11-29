import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import carImageServices from 'src/services/carImageServices';
import { CarImageSliceState } from './types';

const initialState: CarImageSliceState = {
  fetchingMediums: {},
  mediumImages: {},
  errorFetchingMediums: {},

  fetchingThumbs: {},
  thumbImages: {},
  errorFetchingThumbs: {},
};

export const getImagesMediumThunk = createAsyncThunk(
  'getImagesMediumThunk',
  async (lN: number, { rejectWithValue }) => {
    try {
      return await carImageServices.getMediumImages(lN);
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        throw rejectWithValue(lN + 'error not identificeted');
      }
    }
  }
);

export const getThumbs = createAsyncThunk(
  'getThumbs',
  async (lN: number, { rejectWithValue }) => {
    try {
      const thumbs = await carImageServices.getThumbImages(lN);
      return thumbs;
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.response);
        }
      } else {
        return rejectWithValue('Error while getting thumbs');
      }
    }
  }
);

const carImagesSlice = createSlice({
  name: 'carImagesSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //** Get medium size images */
    builder.addCase(getImagesMediumThunk.pending, (state, action) => {
      // in the state we have {loNumber: [...images]}
      state.fetchingMediums[action.meta.arg] = true;
      state.errorFetchingMediums[action.meta.arg] = undefined;
    });
    builder.addCase(getImagesMediumThunk.fulfilled, (state, action) => {
      state.fetchingMediums[action.meta.arg] = false;
      state.mediumImages[action.meta.arg] = action.payload;
    });
    builder.addCase(getImagesMediumThunk.rejected, (state, action) => {
      state.fetchingMediums[action.meta.arg] = false;
      state.errorFetchingMediums[action.meta.arg] = action.payload as string;
    });

    /** Get Thumbs for single lot numbre */
    builder.addCase(getThumbs.pending, (state, action) => {
      state.fetchingThumbs[action.meta.arg] = true;
      state.errorFetchingThumbs[action.meta.arg] = undefined;
    });
    builder.addCase(getThumbs.fulfilled, (state, action) => {
      state.thumbImages[action.meta.arg] = action.payload;
      state.fetchingThumbs[action.meta.arg] = false;
    });
    builder.addCase(getThumbs.rejected, (state, action) => {
      state.fetchingThumbs[action.meta.arg] = false;
      state.errorFetchingThumbs[action.meta.arg] = action.payload;
    });
  },
});

export const { reducer: carImages } = carImagesSlice;
