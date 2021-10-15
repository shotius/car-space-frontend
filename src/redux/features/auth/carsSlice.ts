import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carsService from 'src/services/carsService';
import { CarsSliceState } from './types';

const initialState: CarsSliceState = {
  cars: [],
  brands: [],
};

export const searchCars = createAsyncThunk('cars/searchCars', async () => {
  try {
    const result = await carsService.searchCars();
    return result;
  } catch (error) {
    console.log('error while fetching', error);
  }
});

export const getAllBrands = createAsyncThunk(
  'cars/getBrands',
  async (_, { rejectWithValue }) => {
    try {
      const result = await carsService.getAllBrands();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (_, { rejectWithValue }) => {
    try {
      const result = await carsService.getCars();
      return result;
    } catch (error) {
      return rejectWithValue(error);
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
    builder.addCase(getAllBrands.fulfilled, (state, action) => {
      if (action.payload) {
        state.brands = action.payload;
      } else {
        console.log('nothing is received in brands ');
      }
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      if (action.payload) {
        state.cars = action.payload;
      }
    });
  },
});

export const { reducer: carsReducer } = carsSlice;
