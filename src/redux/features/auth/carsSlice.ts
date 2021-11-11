import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carsService from 'src/services/carsService';
import { setTotalPages } from './carPaginationSlice';
import { CarsSliceState, ICar } from './types';

const initialState: CarsSliceState = {
  cars: [],
  fethingCars: false, 
  brands: [],
  models: [],

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
  async (page: number, { rejectWithValue, dispatch }) => {
    try {
      const result = await carsService.getCars(page);
      dispatch(setTotalPages(result.pagesTotal))
      
      return result.cars as ICar[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const getModels = createAsyncThunk('carFilter/getModels', async (brand: string[], {rejectWithValue}) => {
  try {
    const result = await carsService.getModels(brand[0]) // TO-DO on the server search for array
    return result
  } catch (error) {
    console.log(error)
    rejectWithValue(error)
  }
})

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
    /** fetch cars */
    builder.addCase(getCars.pending, (state) => {
        state.fethingCars = true
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      if (action.payload) {
        //@ts-ignore
        state.cars = action.payload;
        state.fethingCars  = false
      }
    });
    builder.addCase(getCars.rejected, (state) => {
      state.fethingCars = false
  })

    // get models
    builder.addCase(getModels.fulfilled, (state, action) => {
      state.models = action.payload
    })
  },
});

export const { reducer: carsReducer } = carsSlice;
