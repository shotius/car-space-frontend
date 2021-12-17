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
  removingReview: boolean;
  error?: string;
}

const initialState: ICustomerSliceState = {
  reviews: [],
  fetchingReviews: false,
  addingReview: false,
  removingReview: false,
};

/**
 * Function fetches customer reviews
 * @returns {INewReview[]} list of customer reviews
 */
export const getCustomerReviews = createAsyncThunk<
  ICustomerReviewFront[],
  any,
  { rejectValue: string }
>('customer/getCustomerReviews', async (_, { rejectWithValue }) => {
  try {
    const { results } = await customerService.getReviews();
    return results;
  } catch (error) {
    return rejectWithValue('Could not get review');
  }
});

/**
 * Function adds new Review
 * @param {FormData} formdata request datas
 * @returns {ICustomerReviewFront} repsponse is added review
 */
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

/**
 * Function deletes review from
 * @param {string} reviewId
 * @returns {string} success message or error
 */
export const deleteReview = createAsyncThunk<string, string>(
  'customer/deleteReview',
  async (reviewId, { rejectWithValue, dispatch }) => {
    try {
      const { results } = await customerService.removeReview(reviewId);
      dispatch(getCustomerReviews(''));
      return results;
    } catch (error) {
      return rejectWithValue('Could not delete a review');
    }
  }
);

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
    builder.addCase(getCustomerReviews.rejected, (state, action) => {
      state.fetchingReviews = false;
      state.error = action.payload;
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

    // -- Removing Review
    builder.addCase(deleteReview.pending, (state) => {
      state.removingReview = true;
    });
    builder.addCase(deleteReview.fulfilled, (state) => {
      state.removingReview = false;
    });
    builder.addCase(deleteReview.rejected, (state) => {
      state.removingReview = false;
    });
  },
});

export const {} = customerSlice.actions;
export const { reducer: customersReducer } = customerSlice;
