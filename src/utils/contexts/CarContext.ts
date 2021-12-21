import { DamnCard1 } from 'src/DamnCard';
import { createContext, useContext } from 'react';
import { ICarDealer } from '../../../../server/shared_with_front/types/types-shared';

export interface ICarContext {
  car: ICarDealer;
}

export const CarContext = createContext<ICarContext>({car: DamnCard1});

export const useCarContext = () => useContext(CarContext)
