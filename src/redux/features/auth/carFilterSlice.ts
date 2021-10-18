import { carsService } from 'src/services/carsService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CarFilters } from './types';

const initialState: CarFilters = {
  brand: null,
  model: null,
  yearFrom: null,
  yearTo: null,
  priceFrom: null,
  priceTo: null,
};


const carFilterSlice = createSlice({
  name: 'carFilter',
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      state.brand = action.payload;
    },
  },
});

export const { selectBrand } = carFilterSlice.actions;
export const { reducer: carFilterReducer } = carFilterSlice;
