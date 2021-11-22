import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagination } from './types';

const initialState: IPagination = {
  totalPages: 0,
  activePage: 1,
  queryString: '',
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
    setPaginationQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
  },
});

export const { setTotalPages, setActivePage, setPaginationQueryString } =
  carsPaginationSlice.actions;
export const { reducer: carsPagination } = carsPaginationSlice;
