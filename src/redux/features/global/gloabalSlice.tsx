import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType, Languages } from 'src/constants';
import { RootState } from 'src/redux/app/store';
import localStorageServise from 'src/services/localStorage.service';
import getCurrencyPrice from 'src/utils/functions/getCurrencyPrice';
import { AuthForm, GlobalStateSliceState, ScreenSizes } from '../auth/types';

const initialState: GlobalStateSliceState = {
  isAuthFormOpen: false,
  chosenAuthForm: 'login',
  catalogQuery: undefined,
  networkError: undefined,
  lang: 'Eng',

  currency: 'USD',
  currencyPrice: 1,

  isMobileMenuOpen: false,
  carDetailModalShown: false,
  isChangeProfilePictureOpen: false,
  screen: {
    isDesktop: false,
    isTablet: false,
    isMobile: false,
  },
};

// Function gets GEL price of currency in relation with USD
export const changeCurrency = createAsyncThunk<number, CurrencyType>(
  'globalState/detectCurrencyPrice',
  async (currency, { rejectWithValue, dispatch }) => {
    try {
      const price = await getCurrencyPrice(currency);
      dispatch(setAppCurrency(currency));
      return price;
    } catch (error) {
      return rejectWithValue(1);
    }
  }
);

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
    setCurrencyPrice: (state, action: PayloadAction<number>) => {
      state.currencyPrice = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    toggleAuthModal: (state) => {
      state.isAuthFormOpen = !state.isAuthFormOpen;
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
    toggleCarDetailModal: (state) => {
      state.carDetailModalShown = !state.carDetailModalShown;
    },
    chooseAuthForm: (state, action: PayloadAction<AuthForm>) => {
      state.chosenAuthForm = action.payload;
    },
    closeCarDetailModal: (state) => {
      state.carDetailModalShown = false;
    },
    openCarDetailModal: (state) => {
      state.carDetailModalShown;
    },
    openRegisterModal: (state) => {
      state.isAuthFormOpen = true;
      state.chosenAuthForm = 'register';
    },
    openForgotPasswordModal: (state) => {
      state.isAuthFormOpen = true;
      state.chosenAuthForm = 'forget-password';
    },
    openLoginModal: (state) => {
      state.isAuthFormOpen = true;
      state.chosenAuthForm = 'login';
    },
    closeAuthModal: (state) => {
      state.isAuthFormOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeCurrency.fulfilled, (state, action) => {
      state.currencyPrice = action.payload;
    });
  },
});

// this action is not exported outside of the slice
const { setAppCurrency } = globalStateSlice.actions;

/**Exports */
export const {
  toggleAuthModal,
  chooseAuthForm,
  closeAuthModal,
  openLoginModal,
  openForgotPasswordModal,
  openRegisterModal,

  setAppLanguage,
  closeCarDetailModal,
  toggleMobileMenu,
  openCarDetailModal,
  setScreenSize,
  setNetworkError,
  setCatalogQuery,
  toggleProfilePictureChangeModal,
  setUserError,
  toggleCarDetailModal,
  setCurrencyPrice,
} = globalStateSlice.actions;

export const baseCatalogQuerySelector = (state: RootState) => {
  return `CURRENCY_PRICE=${state.globalAppState.currencyPrice}&page=1`;
};

export const { reducer: globalAppState } = globalStateSlice;
