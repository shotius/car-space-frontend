import { HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectPriseFrom,
  selectPriseTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { InputRegular } from '../../Inputs/InputRegular';

interface MobilePriceSelectProps {
  setKeyboardActive: (val: boolean) => void;
}

export const MobilePriceSelect: React.FC<MobilePriceSelectProps> = ({
  setKeyboardActive,
}) => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const dispatch = useAppDispatch();

  const { priceFrom: initPriceFrom, priceTo: initPriceTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // if we have filters saved in redux assign them to components state
  useEffect(() => {
    initPriceFrom ? setPriceFrom(initPriceFrom.toString()) : setPriceFrom('');
    initPriceTo ? setPriceTo(initPriceTo.toString()) : setPriceTo('');
  }, [initPriceFrom, initPriceTo]);

  return (
    <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
      <InputRegular
        pr="2"
        placeholder="Price from"
        opacity={priceFrom ? "1" : "0.7"}
        type="number"
        value={priceFrom}
        onChange={(e) => setPriceFrom(e.currentTarget.value)}
        onFocus={() => setKeyboardActive(true)}
        onBlur={() => {
          setKeyboardActive(false);
          dispatch(selectPriseFrom(priceFrom));
        }}
      />
      <DividerVertical height="30px" />
      <InputRegular
        placeholder="Price to"
        type="number"
        opacity={priceFrom ? "1" : "0.7"}
        value={priceTo}
        onChange={(e) => setPriceTo(e.currentTarget.value)}
        onFocus={() => setKeyboardActive(true)}
        onBlur={() => {
          setKeyboardActive(false);
          dispatch(selectPriseTo(priceTo));
        }}
      />
    </HStack>
  );
};
