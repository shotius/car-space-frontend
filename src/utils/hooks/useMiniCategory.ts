import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FilterQueries } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getDealerCarsCount } from 'src/redux/features/auth/carsSlice';
import {
  selectPriseFrom,
  selectPriseTo,
  selectTypes,
  setMostDemand,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import {
  setSuvs,
  setHachbacks,
  setSedans,
  setFour_k,
  setFourToSix_k,
  setSixToTen_k,
  setMostDemandCount,
} from 'src/redux/features/miniCategory/miniCategorySlice';
import useCurrencyIcon from './useCurrencyIcon';
import { useQueryParams } from './useQueryParams';

export const useMiniCategory = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryParams();

  const { TYPE, PRICE_FROM, PRICE_TO, MOST_DEMAND } = FilterQueries;

  const currencyPrice = useAppSelector(
    (state) => state.globalAppState.currencyPrice
  );
  const suvs = useAppSelector((state) => state.miniCategory.suvs);
  const hachbackes = useAppSelector((state) => state.miniCategory.hackbacks);
  const sedans = useAppSelector((state) => state.miniCategory.sedans);
  const four_k = useAppSelector((state) => state.miniCategory.four_k);
  const fourToSix_k = useAppSelector((state) => state.miniCategory.fourToSix_k);
  const sixToTen_k = useAppSelector((state) => state.miniCategory.sixToTen_k);
  const mostDemands = useAppSelector((state) => state.miniCategory.mostDemands);

  const icon = useCurrencyIcon();

  const getSuvs = () => {
    query.set(TYPE, 'SUV');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setSuvs(count)));
  };

  const getHachbacks = () => {
    query.set(TYPE, 'hachback');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setHachbacks(count)));
  };

  const getSedans = () => {
    query.set(TYPE, 'sedan');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setSedans(count)));
  };

  const getFour_k = () => {
    query.delete(TYPE);
    query.set(PRICE_TO, '4000');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setFour_k(count)));
  };

  const getFourToSixK = () => {
    query.delete(TYPE);
    query.set(PRICE_FROM, '4000');
    query.set(PRICE_TO, '6000');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setFourToSix_k(count)));
  };

  const getSixToTenK = () => {
    query.delete(TYPE);
    query.set(PRICE_FROM, '6000');
    query.set(PRICE_TO, '10000');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setSixToTen_k(count)));
  };

  const getMostDemands = () => {
    query.delete(TYPE);
    query.delete(PRICE_FROM);
    query.delete(PRICE_TO);
    query.set(MOST_DEMAND, 'true');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setMostDemandCount(count)));
  };

  useEffect(() => {
    getSuvs();
    getHachbacks();
    getSedans();
    getFour_k();
    getFourToSixK();
    getSixToTenK();
    getMostDemands();
  }, []);

  const redirect = () => {
    history.push('/catalog?CURRENCY_PRICE=1&page=1&type=HACHBACK');
  };

  const redirectCarType = (type: string[]) => {
    dispatch(selectTypes(type));
    redirect();
  };

  const fourKRedirect = () => {
    dispatch(selectPriseTo((4000 / currencyPrice).toFixed()));
    redirect();
  };

  const fourToSixKRedirect = () => {
    dispatch(selectPriseFrom('4000'));
    dispatch(selectPriseTo('6000'));
    redirect();
  };

  const sixToTenRedirect = () => {
    dispatch(selectPriseFrom('6000'));
    dispatch(selectPriseTo('10000'));
    redirect();
  };

  const mostDemandRedict = () => {
    dispatch(setMostDemand(true));
    history.push('/catalog');
  };

  return {
    redirectCarType,
    sixToTenRedirect,
    mostDemandRedict,
    fourToSixKRedirect,
    fourKRedirect,
    hachbackes,
    sedans,
    currencyPrice,
    icon,
    suvs,
    four_k,
    fourToSix_k,
    sixToTen_k,
    mostDemands,
  };
};
