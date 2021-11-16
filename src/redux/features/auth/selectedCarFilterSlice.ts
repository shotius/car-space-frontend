import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Keys, SelectedCarFilters, Transmission } from './types';

const initialState: SelectedCarFilters = {
  brands: [],
  models: [],
  yearFrom: null,
  yearTo: null,
  priceFrom: null,
  priceTo: null,
  engineFrom: null,
  engineTo: null,
  transsmision: [],
  currency: 'GEL',
  conditions: [],
  types: [],
  locations: [],
  drives: [],
  fuels: [],
  cylinders: [],
  isAdvancedFiltersOpen: false,
  keys: null, 
  salesStatus: []
};

const selectedCarFilterSlice = createSlice({
  name: 'carFilter',
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      state.brands = action.payload;
    },
    selectModels: (state, action) => {
      state.models = action.payload;
    },
    selectEngineFrom: (state, action) => {
      state.engineFrom = action.payload;
    },
    selectEnginTo: (state, action) => {
      state.engineTo = action.payload;
    },
    selectTranssmision: (state, action: PayloadAction<Transmission[]>) => {
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
      state.conditions = action.payload;
    },
    selectTypes: (state, action) => {
      state.types = action.payload;
    },
    selectLocations: (state, action) => {
      state.locations = action.payload;
    },
    selectDrives: (state, action) => {
      state.drives = action.payload;
    },
    selectFuels: (state, action) => {
      state.fuels = action.payload;
    },
    selectCylinders: (state, action) => {
      state.cylinders = action.payload;
    },
    selectCarKeys: (state, action: PayloadAction<Keys>) => {
      state.keys = action.payload
    }, 
    selectSalesStatus: (state, action: PayloadAction<string[]>) => {
      state.salesStatus = action.payload
    }, 
    toggleAdvancedFilters: (state) => {
      if (state.isAdvancedFiltersOpen) {
        state.isAdvancedFiltersOpen = false;
      } else {
        state.isAdvancedFiltersOpen = true;
      }
    },
    openAdvancedFilters: (state) => {
      state.isAdvancedFiltersOpen = true;
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
  selectCylinders,
  selectCarKeys, 
  selectSalesStatus, 
} = selectedCarFilterSlice.actions;
export const { reducer: selectedCarFilters } = selectedCarFilterSlice;
