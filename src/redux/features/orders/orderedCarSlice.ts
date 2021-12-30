import { isApiDefaultError } from './../../../utils/functions/typeChecker';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderedCarsService from 'src/services/orderedCarsService';
import { IOrderedCar } from '../../../../../server/shared_with_front/types/types-shared';
import axios from 'axios';

interface InitState {
  cars: IOrderedCar[];
}

const initialState: InitState = {
  cars: [],
};

export const getUserOrderedCars = createAsyncThunk<IOrderedCar[], string>(
  'orderedCars/getUserOrderedCars',
  async (userId, { rejectWithValue }) => {
    try {
      const { results } = await orderedCarsService.getUserOrderedCars(userId);
      return results;
    } catch (error) {
      if (isApiDefaultError(error)) {
        return rejectWithValue(error.error);
      }
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
      return rejectWithValue('Could');
    }
  }
);

const orderedCarSlice = createSlice({
  name: 'orderedCarSlice',
  initialState,
  reducers: {},
});

export const { reducer: orderedCarReducer } = orderedCarSlice;
