import { createSlice } from '@reduxjs/toolkit';
import { IPagination } from './types';

const initialState: IPagination = {
  totalPages: 0,
  activePage: 96,
};

const carsPaginationSlice = createSlice({
  name: 'carPagination',
  initialState,
  reducers: {
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setTotalPages, setActivePage } = carsPaginationSlice.actions;
export const { reducer: carsPagination } = carsPaginationSlice;