import { createSlice } from '@reduxjs/toolkit';
import { CarFilters } from './types';

const initialState: CarFilters = {
  brands: [],
  models: [],
  yearFrom: null,
  yearTo: null,
  priceFrom: null,
  priceTo: null,
  engineFrom: null,
  engineTo: null,
  transsmision: [],
  currency: "GEL",
  conditions: [],
  types: [],
  locations: [],
  drives: [],
  fuels: [],

  isAdvancedFiltersOpen: false
};

const carFilterSlice = createSlice({
  name: 'carFilter',
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      state.brands = action.payload;
    },
    selectModels: (state, action) => {
      state.models = action.payload
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
    selectConditions: (state, action) => {
      state.conditions = action.payload
    }, 
    selectTypes: (state, action) => {
      state.types = action.payload
    }, 
    selectLocations: (state, action) => {
      state.locations = action.payload
    }, 
    selectDrives: (state, action) => {
      state.drives = action.payload
    }, 
    selectFuels: (state, action) => {
      state.fuels = action.payload
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
    },
  },
});

export const {
  selectBrand,
  selectModels, 
  selectEngineFrom,
  selectEnginTo,
  selectTranssmision,
  selectPriseFrom,
  selectPriseTo,
  selectYearFrom,
  selectYearTo,
  selectCurrency,
  selectConditions, 
  selectDrives, 
  selectFuels, 
  selectTypes, 
  selectLocations,
  toggleAdvancedFilters,
  openAdvancedFilters,
} = carFilterSlice.actions;
export const { reducer: carFilterReducer } = carFilterSlice;
