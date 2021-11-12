import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carsService from 'src/services/carsService';
import { setTotalPages } from './carPaginationSlice';
import { CarsSliceState, ICar, IFilters } from './types';

const initialState: CarsSliceState = {
  cars: [],
  fethingCars: false,
  brands: [],
  models: [],
  locations: [],
  types: [],
  fuels: [],
  conditions: [],
  drives: [],
  getFiltersError: false,
};

export const searchCars = createAsyncThunk('cars/searchCars', async () => {
  try {
    const result = await carsService.searchCars();
    return result;
  } catch (error) {
    console.log('error while fetching', error);
  }
});

export const getFilters = createAsyncThunk(
  'cars/getFilters',
  async (_, { rejectWithValue }) => {
    try {
      return await carsService.getFilters();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (page: number, { rejectWithValue, dispatch }) => {
    try {
      const result = await carsService.getCars(page);
      dispatch(setTotalPages(result.pagesTotal));

      return result.cars as ICar[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getModels = createAsyncThunk(
  'carFilter/getModels',
  async (brand: string[], { rejectWithValue }) => {
    try {
      const result = await carsService.getModels(brand[0]); // TO-DO on the server search for array
      return result;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchCars.fulfilled, (state, action) => {
      console.log(state, action);
    });

    /** fetch cars */
    builder.addCase(getCars.pending, (state) => {
      state.fethingCars = true;
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      if (action.payload) {
        //@ts-ignore
        state.cars = action.payload;
        state.fethingCars = false;
      }
    });
    builder.addCase(getCars.rejected, (state) => {
      state.fethingCars = false;
    });

    // get models
    builder.addCase(getModels.fulfilled, (state, action) => {
      state.models = action.payload;
    });

    // get filter values
    builder.addCase(getFilters.pending, (state) => {
      state.getFiltersError = false;
    });
    builder.addCase(getFilters.fulfilled, (state, action) => {
      const filters = action.payload as IFilters;

      state.brands = filters.brands;
      state.conditions = filters.conditions;
      state.types = filters.types;
      state.locations = filters.location;
      state.drives = filters.drives;
      state.fuels = filters.fuels;
    });
    builder.addCase(getFilters.rejected, (state) => {
      state.getFiltersError = true;
    });
  },
});

export const { reducer: carsReducer } = carsSlice;
