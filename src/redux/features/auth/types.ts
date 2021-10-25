export interface ICar {
  _id: string, 
  lN: string, // Lot number
  m: string, // Make
  vin: string, // VIN
  bSt: string, // Body Style
  sDmg: string, // Secondary Damage
  lSt: string, // Location state
  lC: string, // Location country
  od: string, // Odometer
  cyl: string, // Cylinders
  dr: string, // Drive
  eP: string, // Est. Retail Value
  curB: string, // High Bid =non-vix,Sealed=Vix
  hK: string, // Has Keys-Yes or No
  rC: string, // Repair cost
  mG: string, // Model Group
  mD: string, // Model Detail
  eng: string, // Engine
  dmg: string, // Damage Description
  trans: string, // Transmission
  imgT: string, // Image Thumbnail
  imgU: string, // Image URL
  y: string, // Year
  fuel: string, // Fuel Type
  keys: string, // Has Keys-Yes or No
}

export interface CarsSliceState {
  cars: ICar[],
  brands: string[]
  models: string[]
}

export type Transmission = 'Manual' | 'Automatic' | 'CVT';
export type ICurrency = 'USD' | 'EUR' | 'LARI'

export interface CarFilters {
  brand: string | null,
  model: string | null, 
  yearFrom: string | null, 
  yearTo: string | null, 
  priceFrom: string | null, 
  priceTo: string | null,
  engineFrom: number | null, 
  engineTo: number | null
  transsmision: Transmission[]
  currency: ICurrency
}

export interface IPagination {
  totalPages: number;
  activePage: number;
}