import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType, Languages } from 'src/constants';
import { GlobalStateSliceState, ScreenSizes } from '../auth/types';

const initialState: GlobalStateSliceState = {
  catalogQuery: undefined,
  networkError: undefined,
  lang: 'Eng',
  currency: 'GEL',
  isCatalogBannerOpen: false,
  isLoginOpen: false,
  isRegistrationOpen: false,
  isMobileRegisterLoginOpen: false,
  isChangeProfilePictureOpen: false,
  screen: {
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  },
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
    toggleProfilePictureChangeModal: (state) => {
      state.isChangeProfilePictureOpen = !state.isChangeProfilePictureOpen;
    },
    setScreenSize: (state, action: PayloadAction<ScreenSizes>) => {
      state.screen = action.payload;
    },
    setNetworkError: (state, action: PayloadAction<string | undefined>) => {
      state.networkError = action.payload;
    },
    setCatalogQuery: (state, action: PayloadAction<string | undefined>) => {
      state.catalogQuery = action.payload;
    },
    setUserError: (state, action: PayloadAction<string | undefined>) => {
      state.userError = action.payload;
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
  setScreenSize,
  setNetworkError,
  setCatalogQuery,
  toggleProfilePictureChangeModal,
  setUserError,
} = globalStateSlice.actions;
export const { reducer: globalAppState } = globalStateSlice;
