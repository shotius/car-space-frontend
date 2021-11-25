export enum Roles {
  ADMIN = 'admin',
  DEALER = 'dealer',
  USER = 'user',
}

export enum Currencies {
  GEL = '₾ Gel',
  USD = '$ Usd',
  EUR = '€ Eur',
}

export type CurrencyType = 'USD' | 'EUR' | 'GEL';

export type Languages = 'Eng' | 'Geo' | 'Rus';

export const MOBILE_SCREEN_SIZE = 480;
// export const MOBILE_SCREEN_SIZE = 766
export const TABLET_SCREEN_SIZE = 1135;


/** Queries */
export enum FilterQueries {
  BRAND = 'brand',
  MODEL = 'model',
  YEAR_FROM = 'year_from',
  YEAR_TO = 'year_to',
  CONDITION ="condition", 
}
