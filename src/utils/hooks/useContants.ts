import { useMemo } from 'react';
import { useAppSelector } from 'src/redux/app/hook';

export const useConstants = () => {
  const currencyPrice = useAppSelector(
    (state) => state.globalAppState.currencyPrice
  );
  const DEALER_CARS_CATALOG_URL = '/catalog/dealers';
  const catalogQuery = useMemo(() => {
    return;
    `CURRENCY_PRICE=${currencyPrice}&page=1`;
  }, [currencyPrice]);
  return {
    DEALER_CARS_CATALOG_URL,
  };
};
