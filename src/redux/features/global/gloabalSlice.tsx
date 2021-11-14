import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyType, Languages } from 'src/constants';
import { GlobalStateSliceState } from '../auth/types';

const initialState: GlobalStateSliceState = {
  lang: 'Eng',
  currency: 'GEL',
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
  },
});

export const { setAppCurrency, setAppLanguage } = globalStateSlice.actions;
export const { reducer: globalAppState } = globalStateSlice;
