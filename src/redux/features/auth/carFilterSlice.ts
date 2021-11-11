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
  currency: 'LARI',
  isAdvancedFiltersOpen: false
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
    selectPriseFrom: (state, action) => {
      state.priceFrom = action.payload;
    },
    selectPriseTo: (state, action) => {
      state.priceTo = action.payload;
    },
    selectYearFrom: (state, action) => {
      state.yearFrom = action.payload;
    },
    selectYearTo: (state, action) => {
      state.yearTo = action.payload;
    },
    selectCurrency: (state, action) => {
      state.currency = action.payload;
    },
    toggleAdvancedFilters: (state) => {
      if (state.isAdvancedFiltersOpen) {
        state.isAdvancedFiltersOpen = false
      } else {
        state.isAdvancedFiltersOpen = true
      }
    },
    openAdvancedFilters: (state) => {
      state.isAdvancedFiltersOpen = true
    }
  },
});

export const {
  selectBrand,
  selectEngineFrom,
  selectEnginTo,
  selectTranssmision,
  selectPriseFrom,
  selectPriseTo,
  selectYearFrom,
  selectYearTo,
  selectCurrency,
  toggleAdvancedFilters,
  openAdvancedFilters
} = carFilterSlice.actions;
export const { reducer: carFilterReducer } = carFilterSlice;
