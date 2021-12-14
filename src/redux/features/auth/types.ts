import {
  ICarCopart,
  ICarDealer,
  Keys,
  RoleTypes,
  SelectedCarModel
} from '../../../../../server/shared_with_front/types/types-shared';
import { CurrencyType, Languages } from './../../../constants/index';

export enum TransmissionEnum {
  MANUAL = 'Manual',
  AUTOMATIC = 'Automatic',
  CVT = 'CVT',
}


export interface ICarCopartModel {
  brand: string;
  models: string[];
}

export interface CarsSliceState {
  cars: ICarCopart[];
  fethingCars: boolean;
  fetchingCarsError: string | undefined;

  dealerCars: ICarDealer[], 
  fetchingDealerCars: boolean;

  fetchingSingleCar: boolean;
  errorFetchingSingleCar: string | undefined;

  addingDealerCar: boolean;

  brands: string[];
  models: ICarCopartModel[];
  conditions: string[];
  types: string[];
  locations: string[];
  drives: string[];
  fuels: string[];
  cylinders: string[];
  salesStatus: string[];
  getFiltersError: boolean;
  transmissions: string[];
}

export type Transmission =
  | TransmissionEnum.MANUAL
  | TransmissionEnum.AUTOMATIC
  | TransmissionEnum.CVT;


export interface SelectedCarFilters {
  brands: string[];
  models: SelectedCarModel[];
  yearFrom: number;
  yearTo: number;
  priceFrom?: string;
  priceTo?: string;
  engineFrom: number | null;
  engineTo: number | null;
  transmission: string[];
  currency: CurrencyType;
  isAdvancedFiltersOpen: boolean;
  conditions: string[];
  types: string[];
  locations: string[];
  drives: string[];
  fuels: string[];
  cylinders: string[];
  keys: Keys | null;
  salesStatus: string[];
  queryString: string;
}

export interface IPagination {
  totalPages: number;
  activePage: number | null;
  queryString: string;
}

export interface IFilters {
  conditions: string[];
  types: string[];
  location: string[];
  drives: string[];
  fuels: string[];
  brands: string[];
  cylinders: string[];
  salesStatus: string[];
  transmissions: string[];
}

//** Car image slice types */

export interface CarImageSliceState {
  fetchingMediums: Record<string, boolean>;
  mediumImages: Record<string, string[]>;
  errorFetchingMediums: Record<string, string | undefined>;

  fetchingThumbs: Record<string, boolean>;
  thumbImages: Record<string, string[]>;
  errorFetchingThumbs: Record<string, any | undefined>;
}

//** Languages */

export interface ScreenSizes {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface GlobalStateSliceState {
  catalogQuery: string | undefined;
  lang: Languages;
  currency: CurrencyType;
  isCatalogBannerOpen: boolean;
  isRegistrationOpen: boolean;
  isLoginOpen: boolean;
  isMobileRegisterLoginOpen: boolean;
  isChangeProfilePictureOpen: boolean;
  screen: ScreenSizes;
  networkError: string | undefined;
  userError?: string;
}

//** User slice */

export interface UsertInfoState {
  role: RoleTypes | null;
  isAuthenticated: boolean;
  username: string | null;
  favouriteCarIds: string[];
  avatar?: string;

  favouriteCars: ICarDealer[];
  favouriteCarsFetching: boolean;
  favouriteCarsFetchSuccess: boolean;
  favouriteCarsFetchError: string | null;

  likingCar: boolean;
}
