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
}

const initialState: InitState = {
  cars: [],
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
        return rejectWithValue(error.response);
      }
      return rejectWithValue('Something went wrong :(');
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
});

export const { reducer: orderedCarReducer } = orderedCarSlice;
