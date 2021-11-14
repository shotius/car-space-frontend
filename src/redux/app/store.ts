import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/features/auth/authSlice';
import { carsReducer } from '../features/auth/carsSlice';
import { selectedCarFilters } from '../features/auth/selectedCarFilterSlice';
import { carsPagination } from '../features/auth/carPaginationSlice';
import { carImages } from '../features/auth/carImagesSlice';
import { globalAppState } from '../features/global/gloabalSlice';

const reducer = {
  authReducer,
  carsReducer,
  selectedCarFilters,
  carsPagination,
  carImages,
  globalAppState
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
