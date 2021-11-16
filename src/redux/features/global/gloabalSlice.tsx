import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType, Languages } from 'src/constants';
import { GlobalStateSliceState } from '../auth/types';

const initialState: GlobalStateSliceState = {
  lang: 'Eng',
  currency: 'GEL',
  isCatalogBannerOpen: false,
  isLoginOpen: false,
  isRegistrationOpen: false,
  isMobileRegisterLoginOpen: false,
};

const globalStateSlice = createSlice({
  name: 'globalStateSlice',
  initialState: initialState,
  reducers: {
    setAppLanguage: (state, action: PayloadAction<Languages>) => {
      state.lang = action.payload;
    },
    setAppCurrency: (state, action: PayloadAction<CurrencyType>) => {
      state.currency = action.payload;
    },
    openCatalogBanner: (state) => {
      state.isCatalogBannerOpen = true;
    },
    closeCatalogBanner: (state) => {
      state.isCatalogBannerOpen = false;
    },
    toggleLogin: (state) => {
      state.isLoginOpen
        ? (state.isLoginOpen = false)
        : (state.isLoginOpen = true);
    },
    toggleRegistration: (state) => {
      state.isRegistrationOpen
        ? (state.isRegistrationOpen = false)
        : (state.isRegistrationOpen = true);
    },
    toggleMobileAuthorization: (state) => {
      state.isMobileRegisterLoginOpen
        ? (state.isMobileRegisterLoginOpen = false)
        : (state.isMobileRegisterLoginOpen = true);
    },
  },
});

export const {
  setAppCurrency,
  setAppLanguage,
  openCatalogBanner,
  closeCatalogBanner,
  toggleLogin,
  toggleRegistration,
  toggleMobileAuthorization, 
} = globalStateSlice.actions;
export const { reducer: globalAppState } = globalStateSlice;
