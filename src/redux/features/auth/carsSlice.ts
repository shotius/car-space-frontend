import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import carsService from 'src/services/carsService';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';
import { setTotalPages } from './carPaginationSlice';
import { CarsSliceState, ICarModel, IFilters } from './types';

const initialState: CarsSliceState = {
  // cars
  cars: [],
  fethingCars: false,
  fetchingCarsError: undefined,
  // single car
  fetchingSingleCar: false,
  errorFetchingSingleCar: undefined,
  // filters
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
  transmissions: [],
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

export const getCars = createAsyncThunk<
  ICar[],
  URLSearchParams,
  {
    rejectValue: string;
  }
>('cars/getCars', async (params, { rejectWithValue, dispatch }) => {
  try {
    const result = await carsService.getCars({ params });
    dispatch(setTotalPages(result.pagesTotal));
    return result.cars;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return rejectWithValue(error.response?.data.message as string);
    } else {
      return rejectWithValue(
        'Internal error happend while fetching cars' + error
      );
    }
  }
});

/**
 * Get models of specified brands
 * @param {string[]}: brands
 * @returns {ICarModel[]}: models
 * @throws {string}: error
 */
export const getModels = createAsyncThunk<
  ICarModel[],
  string[],
  { rejectValue: string }
>('carFilter/getModels', async (brands: string[], { rejectWithValue }) => {
  try {
    const result = await carsService.getModels(brands);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    } else {
      return rejectWithValue('Error while fetching models');
    }
  }
});

/**
 * Get Single car
 * @param {number}: lot number
 * @returns {ICar}: car
 * @throws {string}: api error
 */
export const getSingleCarAsync = createAsyncThunk<
  ICar,
  number,
  { rejectValue: string }
>('getSingleCar', async (lN: number, { rejectWithValue }) => {
  try {
    return await carsService.getSingleCar(lN);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data);
    } else {
      return rejectWithValue('some Other error' + error);
    }
  }
});

/** Main reducer */
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

    /** Fetch cars */
    builder.addCase(getCars.pending, (state) => {
      state.fethingCars = true;
      state.fetchingCarsError = undefined;
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.fethingCars = false;
      state.fetchingCarsError = undefined;
    });
    builder.addCase(getCars.rejected, (state, action) => {
      state.fetchingCarsError = action.payload;
      state.fethingCars = false;
    });

    /** Get models */
    builder.addCase(getModels.fulfilled, (state, action) => {
      state.models = action.payload;
    });

    /** Get filter values*/
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
      state.transmissions = filters.transmissions;
    });
    builder.addCase(getFilters.rejected, (state) => {
      state.getFiltersError = true;
    });

    /** Get Single car */
    builder.addCase(getSingleCarAsync.pending, (state) => {
      state.fetchingSingleCar = true;
      state.errorFetchingSingleCar = undefined;
    });
    builder.addCase(getSingleCarAsync.fulfilled, (state, action) => {
      state.fetchingSingleCar = false;
      state.errorFetchingSingleCar = undefined;
      state.cars = state.cars.concat(action.payload);
    });
    builder.addCase(getSingleCarAsync.rejected, (state, aciton) => {
      state.fetchingSingleCar = false
      state.errorFetchingSingleCar = aciton.payload
    })
  },
});

export const { setModels } = carsSlice.actions;
export const { reducer: carsReducer } = carsSlice;
