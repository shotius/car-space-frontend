import { VStack, HStack, StackProps } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { GelIcon } from 'src/components/atoms/Icons/GelIcon';
import { UsdIcon } from 'src/components/atoms/Icons/UsdIcon';
import { useAppDispatch } from 'src/redux/app/hook';
import { setAppCurrency } from 'src/redux/features/global/gloabalSlice';
import { ButtonRect } from '../Buttons/ButtonRect';
import { TextRegular } from '../Texts/TextRegular';

interface CurrencySwitcherProps {}

export const CurrencySwitcher: React.FC<CurrencySwitcherProps & StackProps> = ({
  spacing = 0,
  p = '0',
  ...rest
}) => {
  const dispatch = useAppDispatch();

  return (
    <VStack spacing={spacing} p={p} {...rest}>
      <ButtonRect onClick={() => dispatch(setAppCurrency('GEL'))}>
        <Icon as={GelIcon} boxSize={6} />
        <TextRegular fontSize="16px" pt="3px">
          Gel
        </TextRegular>
      </ButtonRect>
      <ButtonRect onClick={() => dispatch(setAppCurrency('USD'))}>
        <Icon as={UsdIcon} boxSize={6} />
        <TextRegular fontSize="16px" mt="2px">
          Usd
        </TextRegular>
      </ButtonRect>
      <ButtonRect onClick={() => dispatch(setAppCurrency('EUR'))}>
        <HStack pt="1px" pl="1">
          <TextRegular fontSize="18px">€</TextRegular>
          <TextRegular fontSize="16px">Eur</TextRegular>
        </HStack>
      </ButtonRect>
    </VStack>
  );
};
