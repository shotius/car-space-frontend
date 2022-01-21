import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/features/auth/authSlice';
import { carsReducer } from '../features/auth/carsSlice';
import { selectedCarFilters } from '../features/auth/selectedCarFilterSlice';
import { carsPagination } from '../features/auth/carPaginationSlice';
import { carImages } from '../features/auth/carImagesSlice';
import { globalAppState } from '../features/global/gloabalSlice';
import { UserInfo } from '../features/auth/userSlice';
import { customersReducer } from '../features/customer/customerSlice';
import { orderedCarReducer } from '../features/orders/orderedCarSlice';
import { miniCategoryReducer } from '../features/miniCategory/miniCategorySlice';
import { bannerReducer } from '../features/banners/bannerSlice';

const reducer = {
  authReducer,
  carsReducer,
  selectedCarFilters,
  carsPagination,
  carImages,
  globalAppState,
  userInfoSlice: UserInfo,
  customers: customersReducer,
  orderedCars: orderedCarReducer,
  miniCategory: miniCategoryReducer, 
  banners: bannerReducer
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
