import { VStack, HStack, StackProps } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { GelIcon } from 'src/components/atoms/Icons/GelIcon';
import { UsdIcon } from 'src/components/atoms/Icons/UsdIcon';
import { useAppDispatch } from 'src/redux/app/hook';
import { setAppCurrency } from 'src/redux/features/global/gloabalSlice';
import { ButtonRect } from '../Buttons/ButtonRect';
import { TextRegular } from '../Texts/TextRegular';

interface CurrencySwitcherProps {
  closeCurrencyPopover: () => void;
}

export const CurrencySwitcher: React.FC<CurrencySwitcherProps & StackProps> = ({
  closeCurrencyPopover,
  ...rest
}) => {

  const dispatch = useAppDispatch();

  return (
    <VStack spacing={0} p="0" {...rest}>
      <ButtonRect
        onClick={() => {
          dispatch(setAppCurrency('GEL'));
          closeCurrencyPopover();
        }}
      >
        <Icon as={GelIcon} boxSize={6} />
        <TextRegular fontSize="16px" pt="3px">
          Gel
        </TextRegular>
      </ButtonRect>
      <ButtonRect
        onClick={() => {
          dispatch(setAppCurrency('USD'));
          closeCurrencyPopover();
        }}
      >
        <Icon as={UsdIcon} boxSize={6} />
        <TextRegular fontSize="16px" mt="2px">
          Usd
        </TextRegular>
      </ButtonRect>
      <ButtonRect
        onClick={() => {
          dispatch(setAppCurrency('EUR'));
          closeCurrencyPopover();
        }}
      >
        <HStack pt="1px" pl="1">
          <TextRegular fontSize="18px">€</TextRegular>
          <TextRegular fontSize="16px">Eur</TextRegular>
        </HStack>
      </ButtonRect>
    </VStack>
  );
};
