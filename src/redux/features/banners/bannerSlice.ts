import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bannerService from 'src/services/banner.service';
import { IBanner } from '../../../../../server/shared_with_front/types/types-shared';

interface IState {
  banners: IBanner[];
  fetchingBanners: boolean;
  error?: string;
}

const initState: IState = {
  fetchingBanners: false,
  banners: [],
};

export const getBanners = createAsyncThunk<IBanner[]>(
  'banners/getBanners',
  async (_, { rejectWithValue }) => {
    try {
      const { results } = await bannerService.getBanners();
      return results;
    } catch (error) {
      return rejectWithValue('error while fetching banners');
    }
  }
);

export const deleteBanner = createAsyncThunk<
  boolean,
  string,
  { rejectValue: string }
>('banner/deleteBanner', async (id, { rejectWithValue }) => {
  try {
    const { results } = await bannerService.deleteBanner(id);
    return results;
  } catch (error) {
    return rejectWithValue('could not delete the banner');
  }
});

export const addBannerThunk = createAsyncThunk<IBanner, FormData>(
  'banner/addBanner',
  async (formdata, { rejectWithValue }) => {
    try {
      const { results } = await bannerService.addBanner(formdata);
      return results;
    } catch (error) {
      return rejectWithValue('Cound not add a banner');
    }
  }
);

const bannerSlice = createSlice({
  name: 'banner',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    /** Fetching banners */
    builder.addCase(getBanners.pending, (state) => {
      state.fetchingBanners = true;
    });
    builder.addCase(getBanners.fulfilled, (state, action) => {
      state.banners = action.payload;
      state.fetchingBanners = false;
    });
    builder.addCase(getBanners.rejected, (state, action) => {
      state.fetchingBanners = false;
      state.error = action.payload + '';
    });

    /** Add a banner  */
    builder.addCase(addBannerThunk.fulfilled, (state, action) => {
      state.banners.push(action.payload);
    });
  },
});

export const { reducer: bannerReducer } = bannerSlice;
