
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
  CONDITION ="condition", 
  TYPE='type', 
  LOCATION = 'location', 
  TRANSMISSION = 'transmission', 
  KEYS = 'keys', 
  DRIVE = 'drive', 
  SALES_STATUS = 'sales_status', 
  FUEL_TYPE= 'fuel', 
  CYLINDER = 'cylinder',
  YEAR_FROM = 'year_from',
  YEAR_TO = 'year_to',
  PRICE_FROM = 'price_from', 
  PRICE_TO = 'price_to', 
  ENGINE_FROM = 'engine_from', 
  ENGINE_TO = 'engine_to', 
}
