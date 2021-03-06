import { IUpdateOrderedCar } from './../auth/types';
import { isApiDefaultError } from './../../../utils/functions/typeChecker';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderedCarsService from 'src/services/orderedCarsService';
import {
  INewOrderCar,
  IOrderedCar,
} from '../../../../../server/shared_with_front/types/types-shared';
import axios from 'axios';

interface InitState {
  cars: IOrderedCar[];
  fetching: boolean;
}

const initialState: InitState = {
  cars: [],
  fetching: false,
};

/**
 * Function gets order list for specified user
 * @param {string} userid
 * @returns {IOrderedCar[]}
 */
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

/**
 * Function adds new car for specific user
 * @param {INewOrderCar} props for new car
 * @returns {IOrderedCar}
 */
export const addOrder = createAsyncThunk<IOrderedCar, INewOrderCar>(
  'orderedCar/addOrder',
  async (props, { rejectWithValue }) => {
    try {
      const { results } = await orderedCarsService.addOrder(props);
      return results;
    } catch (error) {
      if (isApiDefaultError(error)) {
        return rejectWithValue(error.error);
      }
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Something went wrong :(');
    }
  }
);

/**
 * Function updates ordered car
 * @param {IUpdateOrderedCar}
 * @returns {IOrderedCar}
 */
export const updateOrderCar = createAsyncThunk<IOrderedCar, IUpdateOrderedCar>(
  'orderedCar/updateOrderCar',
  async (props, { rejectWithValue }) => {
    try {
      const { results } = await orderedCarsService.updateOrder(props);
      return results;
    } catch (error) {
      if (isApiDefaultError(error)) {
        return rejectWithValue(error.error);
      }
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Something went Wrong ;(');
    }
  }
);

/**
 * Function deletes the oredered car by id
 * @param {string} carid
 * @returns {boolean}
 */
export const deleteOrderedCar = createAsyncThunk<boolean, string>(
  'orderedCar/deleteOrderedCar',
  async (carid, { rejectWithValue }) => {
    try {
      const { results } = await orderedCarsService.deleteOrder(carid);
      return results;
    } catch (error) {
      if (isApiDefaultError(error)) {
        return rejectWithValue(error.error);
      }
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response);
      }
      return rejectWithValue('Something went wrong');
    }
  }
);

const orderedCarSlice = createSlice({
  name: 'orderedCarSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserOrderedCars.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(getUserOrderedCars.fulfilled, (state) => {
      state.fetching = false;
    });
    builder.addCase(getUserOrderedCars.rejected, (state) => {
      state.fetching = false;
    });
  },
});

export const { reducer: orderedCarReducer } = orderedCarSlice;
