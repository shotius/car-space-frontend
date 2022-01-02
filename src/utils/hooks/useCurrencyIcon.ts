import { useState, useEffect } from 'react';
import { useAppSelector } from 'src/redux/app/hook';

export const useCurrencyIcon = () => {
  const [icon, setIcon] = useState('$');
  const currency = useAppSelector((state) => state.globalAppState.currency);

  useEffect(() => {
    switch (currency) {
      case 'EUR':
        setIcon('€');
        break;
      case 'GEL':
        setIcon('₾');
        break;
      case 'USD':
        setIcon('$');
        break;
    }
  }, [currency]);

  return icon;
};

export default useCurrencyIcon;
