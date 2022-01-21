import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import carsService from 'src/services/carsService';

type IMiniCategoryInitState = {
  suvs: number;
  hackbacks: number;
  sedans: number;
  four_k: number;
  fourToSix_k: number;
  sixToTen_k: number;
  mostDemands: number;
};

const initialState: IMiniCategoryInitState = {
  suvs: 0,
  hackbacks: 0,
  sedans: 0,
  four_k: 0,
  fourToSix_k: 0,
  sixToTen_k: 0,
  mostDemands: 0,
};

export const getSuvs = createAsyncThunk<
  number,
  URLSearchParams,
  {
    rejectValue: string;
  }
>('getSuvs', async (params, { rejectWithValue }) => {
  try {
    const { results } = await carsService.getDealerCars(params);
    return results.cars.length;
  } catch (error) {
    return rejectWithValue('');
  }
});

const miniCategorySlice = createSlice({
  name: 'miniCategorySclie',
  initialState: initialState,
  reducers: {
    setSuvs: (state, action: PayloadAction<number>) => {
      state.suvs = action.payload;
    },
    setHachbacks: (state, action: PayloadAction<number>) => {
      state.hackbacks = action.payload;
    },
    setSedans: (state, action: PayloadAction<number>) => {
      state.sedans = action.payload;
    },
    setFour_k: (state, action: PayloadAction<number>) => {
      state.four_k = action.payload;
    },
    setFourToSix_k: (state, action: PayloadAction<number>) => {
      state.fourToSix_k = action.payload;
    },
    setSixToTen_k: (state, action: PayloadAction<number>) => {
      state.sixToTen_k = action.payload;
    },
    setMostDemandCount: (state, action: PayloadAction<number>) => {
      state.mostDemands = action.payload;
    },
  },
});

export const {
  setSuvs,
  setHachbacks,
  setSedans,
  setFour_k,
  setFourToSix_k,
  setSixToTen_k,
  setMostDemandCount,
} = miniCategorySlice.actions;
export const { reducer: miniCategoryReducer } = miniCategorySlice;
