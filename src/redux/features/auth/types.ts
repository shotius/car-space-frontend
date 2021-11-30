import { ICar, SelectedCarModel } from '../../../../../server/shared_with_front/types/types-shared';
import { CurrencyType, Languages, Roles } from './../../../constants/index';


export interface ICarModel {
  brand: string;
  models: string[]
}

export interface CarsSliceState {
  cars: ICar[];
  fethingCars: boolean;
  fetchingCarsError: string | undefined;

  fetchingSingleCar: boolean;
  errorFetchingSingleCar: string | undefined; 
  
  brands: string[];
  models: ICarModel[];
  conditions: string[];
  types: string[];
  locations: string[];
  drives: string[];
  fuels: string[];
  cylinders: string[];
  salesStatus: string[];
  getFiltersError: boolean;
  transmissions: string[]
}

export type Transmission = 'Manual' | 'Automatic' | 'CVT';

export type Keys = 'YES' | 'NO' | null;


export interface SelectedCarFilters {
  brands: string[];
  models: SelectedCarModel[];
  yearFrom: string | null;
  yearTo: string | null;
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
  activePage: number | null ;
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
  transmissions: string[]
}

//** Car image slice types */

export interface CarImageSliceState {
  fetchingMediums: Record<string, boolean>;
  mediumImages: Record<string, string[]>;
  errorFetchingMediums: Record<string, string | undefined>;

  fetchingThumbs: Record<string, boolean>; 
  thumbImages: Record<string, string[]>
  errorFetchingThumbs: Record<string, any | undefined>;
}

//** Languages */

export interface ScreenSizes {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface GlobalStateSliceState {
  lang: Languages;
  currency: CurrencyType;
  isCatalogBannerOpen: boolean;
  isRegistrationOpen: boolean;
  isLoginOpen: boolean;
  isMobileRegisterLoginOpen: boolean;
  queryString: string;
  screen: ScreenSizes;
  networkError: string | undefined
}

//** User slice */

export type RoleTypes = Roles.ADMIN | Roles.DEALER;

export interface IUser {
  role: RoleTypes | null;
  isAuthenticated: boolean;
  username: string | null;
  favourites?: string[];
}
