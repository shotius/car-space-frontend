import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'src/redux/features/auth/authSlice';
import { carImages } from '../features/auth/carImagesSlice';
import { carsReducer } from '../features/auth/carsSlice';
import { selectedCarFilters } from '../features/auth/selectedCarFilterSlice';
import { UserInfo } from '../features/auth/userSlice';
import { bannerReducer } from '../features/banners/bannerSlice';
import CatalogBannerSlice from '../features/banners/CatalogBannerSlice';
import { customersReducer } from '../features/customer/customerSlice';
import { globalAppState } from '../features/global/gloabalSlice';
import { miniCategoryReducer } from '../features/miniCategory/miniCategorySlice';
import { orderedCarReducer } from '../features/orders/orderedCarSlice';

const reducer = {
  authReducer,
  carsReducer,
  selectedCarFilters,
  carImages,
  globalAppState,
  userInfoSlice: UserInfo,
  customers: customersReducer,
  orderedCars: orderedCarReducer,
  miniCategory: miniCategoryReducer,
  banners: bannerReducer,
  catalogBanner: CatalogBannerSlice,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
