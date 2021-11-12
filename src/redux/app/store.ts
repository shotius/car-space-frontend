import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/features/auth/authSlice';
import { carsReducer } from '../features/auth/carsSlice';
import { selectedCarFilters } from '../features/auth/carFilterSlice';
import { carsPagination } from '../features/auth/carPaginationSlice'

const reducer = { authReducer, carsReducer, selectedCarFilters, carsPagination };

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
