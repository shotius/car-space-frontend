import { createSlice } from '@reduxjs/toolkit';
import { CarFilters } from './types';

const initialState: CarFilters = {
  brand: null,
  model: null,
  yearFrom: null,
  yearTo: null,
  priceFrom: null,
  priceTo: null,
  engineFrom: null,
  engineTo: null,
  transsmision: [],
};

const carFilterSlice = createSlice({
  name: 'carFilter',
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      state.brand = action.payload;
    },
    selectEngineFrom: (state, action) => {
      state.engineFrom = action.payload;
    },
    selectEnginTo: (state, action) => {
      state.engineTo = action.payload;
    },
    selectTranssmision: (state, action) => {
      state.transsmision = action.payload;
    },
  },
});

export const {
  selectBrand,
  selectEngineFrom,
  selectEnginTo,
  selectTranssmision,
} = carFilterSlice.actions;
export const { reducer: carFilterReducer } = carFilterSlice;
