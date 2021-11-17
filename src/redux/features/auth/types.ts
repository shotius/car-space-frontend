import { CurrencyType, Languages, Roles } from './../../../constants/index';

export interface ICar {
  _id: string;
  lN: string; // Lot number
  m: string; // Make
  vin: string; // VIN
  bSt: string; // Body Style
  sDmg: string; // Secondary Damage
  lSt: string; // Location state
  lC: string; // Location country
  od: string; // Odometer
  cyl: string; // Cylinders
  dr: string; // Drive
  eP: string; // Est. Retail Value
  curB: string; // High Bid =non-vix,Sealed=Vix
  hK: string; // Has Keys-Yes or No
  rC: string; // Repair cost
  mG: string; // Model Group
  mD: string; // Model Detail
  eng: string; // Engine
  dmg: string; // Damage Description
  trans: string; // Transmission
  imgT: string; // Image Thumbnail
  imgU: string; // Image URL
  y: string; // Year
  fuel: string; // Fuel Type
  keys: string; // Has Keys-Yes or No
}

export interface CarsSliceState {
  cars: ICar[];
  fethingCars: boolean;
  brands: string[];
  models: string[];
  conditions: string[];
  types: string[];
  locations: string[];
  drives: string[];
  fuels: string[];
  cylinders: string[];
  salesStatus: string[]
  getFiltersError: boolean;
}

export type Transmission = 'Manual' | 'Automatic' | 'CVT';

export type Keys = 'YES' | 'NO' | null

export interface SelectedCarFilters {
  brands: string[];
  models: string[];
  yearFrom: string | null;
  yearTo: string | null;
  priceFrom: string | null;
  priceTo: string | null;
  engineFrom: number | null;
  engineTo: number | null;
  transsmision: Transmission[];
  currency: CurrencyType;
  isAdvancedFiltersOpen: boolean;
  conditions: string[];
  types: string[];
  locations: string[];
  drives: string[];
  fuels: string[];
  cylinders: string[];
  keys: Keys | null;
  salesStatus: string[]
}

export interface IPagination {
  totalPages: number;
  activePage: number;
}

export interface IFilters {
  conditions: string[];
  types: string[];
  location: string[];
  drives: string[];
  fuels: string[];
  brands: string[];
  cylinders: string[];
  salesStatus: string[]
}

//** Car image slice types */

export interface CarImageSliceState {
  fetchingMediums: Record<string, boolean>;
  mediumImages: Record<string, string[]>;
  errorFetchingMediums: string[];
}



//** Languages */

export interface GlobalStateSliceState {
  lang: Languages
  currency: CurrencyType
  isCatalogBannerOpen: boolean
  isRegistrationOpen: boolean
  isLoginOpen: boolean
  isMobileRegisterLoginOpen: boolean
}



//** User slice */

export type RoleTypes = Roles.ADMIN | Roles.DEALER;

export interface IUser {
  role: RoleTypes | null;
  isAuthenticated: boolean;
  username: string | null;
}