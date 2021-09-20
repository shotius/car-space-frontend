export interface ICar {
  lotNum: string;
  make: string;
  vin: string;
  bodyStyle: string;
  secondaryDmg: string;
  locState: string;
  hasKey: string;
  repairCost: string;
  modelGroup: string;
  modelDetail: string;
  engine: string;
  damageDesc: string;
  transmision: string;
  imgThumb: string;
  imgUrl: string;
}

export interface CarsSliceState {
  cars: ICar[]
}