import { HStack, Icon, StackProps } from '@chakra-ui/react';
import { CurrencyType } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { changeCurrency } from 'src/redux/features/global/gloabalSlice';
import { EuroIcon } from '../atoms/Icons/EuroIcon';
import { GelIcon } from '../atoms/Icons/GelIcon';
import { UsdIcon } from '../atoms/Icons/UsdIcon';
import { ButtonRound } from './Buttons/ButtonRound';

interface CurencySwitcherButtonsProps {}

export const CurrencySwitcherButtons: React.FC<
  CurencySwitcherButtonsProps & StackProps
> = ({ ...rest }) => {
  const currency = useAppSelector((state) => state.globalAppState.currency);
  const dispatch = useAppDispatch();

  function setCurrency(val: CurrencyType) {
    dispatch(changeCurrency(val));
  }

  return (
    <HStack
      borderRadius="8px"
      bg="transparent"
      spacing="2px"
      flexBasis="30%"
      justify="space-between"
      p="7px"
      {...rest}
    >
      <ButtonRound
        onClick={() => setCurrency('USD')}
        active={currency === 'USD'}
      >
        <Icon
          as={UsdIcon}
          boxSize={6}
          fontWeight="400"
          fill={currency === 'USD' ? '#fff' : '#000'}
        />
      </ButtonRound>
      <ButtonRound
        onClick={() => setCurrency('GEL')}
        active={currency === 'GEL'}
      >
        <Icon
          as={GelIcon}
          fill={currency === 'GEL' ? '#fff' : '#000'}
          boxSize={7}
          fontWeight="400"
        />
      </ButtonRound>

      <ButtonRound
        onClick={() => setCurrency('EUR')}
        active={currency === 'EUR'}
        fontSize="20px"
        fontWeight="400"
      >
        <Icon
          as={EuroIcon}
          boxSize={6}
          fontWeight="400"
          fill={currency === 'EUR' ? '#fff' : '#000'}
        />
      </ButtonRound>
    </HStack>
  );
};
