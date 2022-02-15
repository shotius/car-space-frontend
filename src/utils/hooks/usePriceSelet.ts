import { useState, useEffect, SyntheticEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'src/redux/app/hook';
import {
  selectPriseFrom,
  selectPriseTo,
  selectCurrency,
} from 'src/redux/features/auth/selectedCarFilterSlice';

export const usePriceSelect = () => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);

  const [placeholder, setPlaceholder] = useState<string>('');
  const [priceFrom, setPriceFrom] = useState<string>('');
  const [priceTo, setPriceTo] = useState<string>('');

  const {
    priceFrom: initPriceFrom,
    priceTo: initPriceTo,
    currency,
  } = useAppSelector((state) => state.selectedCarFilters);

  const dispatch = useAppDispatch();

  const detectIcon = () => {
    switch (currency) {
      case 'GEL':
        return '₾';
      case 'EUR':
        return '€';
      case 'USD':
        return '$';
    }
  };

  // set initial values
  useEffect(() => {
    initPriceFrom ? setPriceFrom(initPriceFrom) : setPriceFrom('');
    initPriceTo ? setPriceTo(initPriceTo) : setPriceTo('');
  }, [initPriceFrom, initPriceTo]);

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (priceTo && priceFrom) {
      setPlaceholder(` ${detectIcon()} ${priceFrom} - ${priceTo} `);
    } else if (priceFrom) {
      setPlaceholder(`from: ${currency} ${priceFrom}`);
    } else if (priceTo) {
      setPlaceholder(`to: ${currency} ${priceTo}`);
    } else {
      setPlaceholder(`price`);
    }
  }, [priceFrom, priceTo, currency]);

  const handleClose = () => {
    setAreOptionsOpen(false);
    dispatch(selectPriseFrom(priceFrom));
    dispatch(selectPriseTo(priceTo));
    dispatch(selectCurrency(currency));
  };

  const clearCb = (e: SyntheticEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    dispatch(selectPriseFrom(''));
    dispatch(selectPriseTo(''));
    setPriceFrom('');
    setPriceTo('');
    setPlaceholder('Price');
    setAreOptionsOpen(false);
  };

  const areOptionsSelected = !!priceFrom || !!priceTo;

  const isBlack = areOptionsOpen || areOptionsSelected;

  return {
    areOptionsOpen,
    setAreOptionsOpen,
    placeholder,
    handleClose,
    clearCb,
    priceFrom,
    priceTo,
    areOptionsSelected,
    setPriceFrom,
    setPriceTo,
    isBlack,
  };
};
