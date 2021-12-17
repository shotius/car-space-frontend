import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import customerService from 'src/services/customerService';
import { isApiValidationError } from 'src/utils/functions/typeChecker';
import {
  ApiValidationError,
  ICustomerReviewFront,
} from '../../../../../server/shared_with_front/types/types-shared';

interface ICustomerSliceState {
  reviews: ICustomerReviewFront[];
  fetchingReviews: boolean;
  addingReview: boolean;
}

const initialState: ICustomerSliceState = {
  reviews: [],
  fetchingReviews: false,
  addingReview: false,
};

/**
 * Function fetches customer reviews
 * @returns {INewReview[]} list of customer reviews
 */
export const getCustomerReviews = createAsyncThunk<ICustomerReviewFront[]>(
  'customer/getCustomerReviews',
  async (_, { rejectWithValue }) => {
    try {
      const { results } = await customerService.getReviews();
      return results;
    } catch (error) {
      return rejectWithValue('Could not get review');
    }
  }
);

export const addCustomerReview = createAsyncThunk<
  ICustomerReviewFront,
  FormData,
  { rejectValue: string | ApiValidationError }
>('customer/addCustomerReview', async (formdata, { rejectWithValue }) => {
  try {
    const { results } = await customerService.addReview(formdata);
    return results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && isApiValidationError(error.response.data)) {
        return rejectWithValue(error.response.data);
      }
    }
    return rejectWithValue('Could not add a review');
  }
});

const customerSlice = createSlice({
  name: 'customerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // -- Get Reviews
    builder.addCase(getCustomerReviews.pending, (state) => {
      state.fetchingReviews = true;
    });
    builder.addCase(getCustomerReviews.fulfilled, (state, action) => {
      state.fetchingReviews = false;
      state.reviews = action.payload;
    });
    builder.addCase(getCustomerReviews.rejected, (state) => {
      state.fetchingReviews = false;
    });

    // -- Add Review
    builder.addCase(addCustomerReview.pending, (state) => {
      state.addingReview = true;
    });
    builder.addCase(addCustomerReview.fulfilled, (state, action) => {
      state.addingReview = false;
      state.reviews = state.reviews.concat(action.payload);
    });
    builder.addCase(addCustomerReview.rejected, (state) => {
      state.addingReview = false;
    });
  },
});

export const {} = customerSlice.actions;
export const { reducer: customersReducer } = customerSlice;
