import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CatalogBannerState {
  isCatalogBannerOpen: boolean;
  catalogBannerImage?: string;
  catalogBannerDealerName?: string;
}

const initialState: CatalogBannerState = {
  isCatalogBannerOpen: false,
  // catalogBannerImage: 'https://images.news18.com/ibnlive/uploads/2021/06/1622715559_disha.jpg',
  catalogBannerImage: undefined,
  catalogBannerDealerName: 'Dealer Name',
};

const CatalogBannerSlice = createSlice({
  name: 'CatalogBannerSlice',
  initialState,
  reducers: {
    setCatalogBannerDealerName: (state, action: PayloadAction<string>) => {
      state.catalogBannerDealerName = action.payload;
    },
    openCatalogBanner: (state) => {
      state.isCatalogBannerOpen = true;
    },
    closeCatalogBanner: (state) => {
      state.isCatalogBannerOpen = false;
    },
    setCatalogBannerDealerImage: (state, action: PayloadAction<string>) => {
      state.catalogBannerImage = action.payload;
    },
  },
});

export const {
  openCatalogBanner,
  closeCatalogBanner,
  setCatalogBannerDealerName,
  setCatalogBannerDealerImage,
} = CatalogBannerSlice.actions;
export default CatalogBannerSlice.reducer;
