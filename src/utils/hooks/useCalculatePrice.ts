import { useAppSelector } from 'src/redux/app/hook';

export const useCalculatePrice = (rawPrice: number) => {
  const price = useAppSelector((state) => state.globalAppState.currencyPrice);

  const calculatePrice = () => price * rawPrice;

  return calculatePrice;
};

export default useCalculatePrice;
