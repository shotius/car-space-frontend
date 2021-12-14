import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType } from 'src/constants';
import { Keys, SelectedCarModel } from '../../../../../server/shared_with_front/types/types-shared';
import { SelectedCarFilters } from './types';

const initialState: SelectedCarFilters = {
  brands: [],
  models: [],
  yearFrom: 0,
  yearTo: 0,
  priceFrom: undefined,
  priceTo: undefined,
  engineFrom: null,
  engineTo: null,
  transmission: [],
  currency: 'GEL',
  conditions: [],
  types: [],
  locations: [],
  drives: [],
  fuels: [],
  cylinders: [],
  isAdvancedFiltersOpen: false,
  keys: null, 
  salesStatus: [],
  queryString: ''
};

const selectedCarFilterSlice = createSlice({
  name: 'carFilter',
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      state.brands = action.payload;
    },
    selectModels: (state, action: PayloadAction<SelectedCarModel[]>) => {
      state.models = action.payload;
    },
    selectEngineFrom: (state, action) => {
      state.engineFrom = action.payload;
    },
    selectEnginTo: (state, action) => {
      state.engineTo = action.payload;
    },
    selectTranssmision: (state, action: PayloadAction<string[]>) => {
      state.transmission = action.payload;
    },
    selectPriseFrom: (state, action: PayloadAction<string | undefined>) => {
      state.priceFrom = action.payload;
    },
    selectPriseTo: (state, action: PayloadAction<string | undefined>) => {
      state.priceTo = action.payload;
    },
    selectYearFrom: (state, action: PayloadAction<number>) => {
      state.yearFrom = action.payload;
    },
    selectYearTo: (state, action: PayloadAction<number>) => {
      state.yearTo = action.payload;
    },
    selectCurrency: (state, action: PayloadAction<CurrencyType>) => {
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
    selectCarKeys: (state, action: PayloadAction<Keys | null>) => {
      state.keys = action.payload
    }, 
    selectSalesStatus: (state, action: PayloadAction<string[]>) => {
      state.salesStatus = action.payload
    }, 
    setFilterQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload
    }, 
    closeAdvacedFilters: (state) => {
      state.isAdvancedFiltersOpen = false
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
  setFilterQueryString,
  closeAdvacedFilters
} = selectedCarFilterSlice.actions;
export const { reducer: selectedCarFilters } = selectedCarFilterSlice;
