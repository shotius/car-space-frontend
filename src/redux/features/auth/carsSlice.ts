import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import carsService from 'src/services/carsService';
import { setTotalPages } from './carPaginationSlice';
import { CarsSliceState, ICar, ICarModel, IFilters } from './types';

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
  cylinders: [],
  salesStatus: [],
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
  async (params: URLSearchParams, { rejectWithValue, dispatch }) => {
    try {
      const result = await carsService.getCars({params});
      dispatch(setTotalPages(result.pagesTotal));

      return result.cars as ICar[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getModels = createAsyncThunk(
  'carFilter/getModels',
  async (brands: string[], { rejectWithValue }) => {
    try {
      const result = await carsService.getModels(brands);
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
  reducers: {
    setModels: (state, action: PayloadAction<ICarModel[]>) => {
      state.models = action.payload;
    },
  },
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
      state.cylinders = filters.cylinders;
      state.salesStatus = filters.salesStatus;
    });
    builder.addCase(getFilters.rejected, (state) => {
      state.getFiltersError = true;
    });
  },
});

export const { setModels } = carsSlice.actions;
export const { reducer: carsReducer } = carsSlice;
