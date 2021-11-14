import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carImageServices from 'src/services/carImageServices';
import { CarImageSliceState } from './types';

const initialState: CarImageSliceState = {
  fetchingMediums: {},
  mediumImages: {},
  errorFetchingMediums: [],
};

export const getImagesMedium = createAsyncThunk(
  'getImagesMedium',
  async (lN: string, { rejectWithValue }) => {
    try {
      const images = await carImageServices.getMediumImages(lN);
      return images;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        throw new Error(lN);
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
    builder.addCase(getImagesMedium.pending, (state, action) => {
      state.fetchingMediums[action.meta.arg] = true
      state.errorFetchingMediums.filter(lotNum => lotNum !== action.meta.arg)
    })
    builder.addCase(getImagesMedium.fulfilled, (state, action) => {
      state.fetchingMediums[action.meta.arg] = false
      state.mediumImages[action.meta.arg] = action.payload
    });
    builder.addCase(getImagesMedium.rejected, (state, action) => {
      state.fetchingMediums[action.meta.arg] = false
      state.errorFetchingMediums.push(action.meta.arg)
    });
  },
});

export const { reducer: carImages } = carImagesSlice;
