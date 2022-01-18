import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import carsService from 'src/services/carsService';
import {
  ApiValidationError,
  ICarCopart,
  ICarDealer,
} from '../../../../../server/shared_with_front/types/types-shared';
import { setNetworkError } from '../global/gloabalSlice';
import { isApiValidationError } from './../../../utils/functions/typeChecker';
import { setTotalPages } from './carPaginationSlice';
import { CarsSliceState, ICarCopartModel, IFilters } from './types';

const initialState: CarsSliceState = {
  // cars
  cars: [],
  fethingCars: false,
  fetchingCarsError: undefined,

  // single car
  fetchingSingleCar: false,
  errorFetchingSingleCar: undefined,

  // dealer cars
  addingDealerCar: false,
  fetchingDealerCar: false,

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

  dealerCars: [],
  fetchingDealerCars: false,
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

/**
 * Function gets dealer cars
 * @param param query string params
 * @returns dealer cars or rejects with value
 */
export const getDealerCars = createAsyncThunk<
  ICarDealer[],
  URLSearchParams,
  {
    rejectValue: string;
  }
>('cars/getDealerCars', async (params, { rejectWithValue, dispatch }) => {
  try {
    const { results } = await carsService.getDealerCars(params);
    dispatch(setTotalPages(results.pagesTotal));
    return results.cars;
  } catch (error) {
    return rejectWithValue('could not get dealer cars');
  }
});

export const getCars = createAsyncThunk<
  ICarCopart[],
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
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        dispatch(setNetworkError('Network error'));
      }
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
 * @returns {ICarCopartModel[]}: models
 * @throws {string}: error
 */
export const getModels = createAsyncThunk<
  ICarCopartModel[],
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
 * @returns {ICarCopart}: car
 * @throws {string}: api error
 */
export const getSingleCarAsync = createAsyncThunk<
  ICarCopart,
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

/** Returns recent added cars */
export const getRecentCars = createAsyncThunk<ICarDealer[]>(
  'getRecentCars',
  async (_, { rejectWithValue }) => {
    try {
      const { results } = await carsService.getRecentCars();
      return results;
    } catch (error) {
      return rejectWithValue(error + '');
    }
  }
);


export const getSingleDealerCarThunk = createAsyncThunk<
  ICarDealer,
  string,
  { rejectValue: string }
>('cars/getSingleDealerCar', async (carId: string, { rejectWithValue }) => {
  try {
    const { results } = await carsService.getSingleDealerCarThunk(carId);
    return results;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data);
    } else {
      return rejectWithValue('some Other error' + error);
    }
  }
});

/**
 * Function adds new dealer car
 * @param formData
 * @returns newly created car or rejected error
 */
export const addDealerCar = createAsyncThunk<
  ICarDealer[],
  FormData,
  {
    rejectValue: string | ApiValidationError;
  }
>('cars/addDealerCar', async (formData: FormData, { rejectWithValue }) => {
  try {
    const { results } = await carsService.addDealerCar(formData);
    return results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && isApiValidationError(error.response.data)) {
        return rejectWithValue(error.response.data);
      }
    }
    return rejectWithValue('Something wrong happend ;(');
  }
});

/**
 * FUnction removes car from db
 * @param id: car id
 * @returns boolean or throws an error
 */
export const removeSingleCar = createAsyncThunk<boolean, string>(
  'cars/removeSingleCar',
  async (id: string) => {
    await carsService.removeSingleCar(id);
    return true;
  }
);

/** Main reducer */
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setModels: (state, action: PayloadAction<ICarCopartModel[]>) => {
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
      state.fetchingSingleCar = false;
      state.errorFetchingSingleCar = aciton.payload;
    });

    /** Get Dealers' cars */
    builder.addCase(getDealerCars.pending, (state) => {
      state.fetchingDealerCars = true;
    });
    builder.addCase(getDealerCars.fulfilled, (state, action) => {
      state.dealerCars = action.payload;
      state.fetchingDealerCars = false;
    });
    builder.addCase(getDealerCars.rejected, (state) => {
      state.fetchingDealerCars = false;
    });

    /** Add new dealer car */
    builder.addCase(addDealerCar.pending, (state) => {
      state.addingDealerCar = true;
    });
    builder.addCase(addDealerCar.fulfilled, (state, action) => {
      state.dealerCars = action.payload;
      state.addingDealerCar = false;
    });
    builder.addCase(addDealerCar.rejected, (state) => {
      state.addingDealerCar = false;
    });

    // --Dealer car

    builder.addCase(getSingleDealerCarThunk.pending, (state) => {
      state.fetchingDealerCar = true;
    });
    builder.addCase(getSingleDealerCarThunk.fulfilled, (state, action) => {
      state.fetchingDealerCar = false;
      state.dealerCars = state.dealerCars.concat(action.payload);
    });
    builder.addCase(getSingleDealerCarThunk.rejected, (state) => {
      state.fetchingDealerCar = false;
    });
  },
});

export const { setModels } = carsSlice.actions;
export const { reducer: carsReducer } = carsSlice;
