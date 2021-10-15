import { useDisclosure } from '@chakra-ui/hooks';
import { HStack, Stack } from '@chakra-ui/layout';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { CurentyType } from 'src/constants';
import { useAppSelector } from 'src/redux/app/hook';
import { CurrencyButton } from '../Buttons/CurrencyButton';
import { InputRegular } from '../Inputs/InputRegular';
import { MobileSelect } from '../MobileSelect';
import { MobileBrandSelect } from '../MobileSelectPopups/MobileBrandSelect';

interface ThreeMobileSelectsProps {
  setIsInputFocused: (a: boolean) => void;
}

export const ThreeMobileSelects: React.FC<ThreeMobileSelectsProps> = ({
  setIsInputFocused: setKeyboardActive,
}) => {
  const [chosenCurrency, setChosenCurrency] = useState<CurentyType>('LARI');
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { brands } = useAppSelector((state) => state.carsReducer);

  return (
    <Stack display={['flex', 'none']}>
      <MobileSelect onClick={onOpen} label="Brand" />
      <MobileBrandSelect brands={brands} isOpen={isOpen} onClose={onClose} />

      <MobileSelect onClick={onOpen} label="Models" />
      {/* year */}
      <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
        <InputRegular
          pr="2"
          placeholder="Year from"
          type="number"
          onFocus={() => setKeyboardActive(true)}
          onBlur={() => setKeyboardActive(false)}
        />
        <DividerVertical height="30px" />
        <InputRegular
          placeholder="Year to"
          type="number"
          onFocus={() => setKeyboardActive(true)}
          onBlur={() => setKeyboardActive(false)}
        />
      </HStack>
      {/* price */}
      <HStack justify="space-between">
        <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
          <InputRegular
            pr="2"
            placeholder="Price from"
            type="number"
            onFocus={() => setKeyboardActive(true)}
            onBlur={() => setKeyboardActive(false)}
          />
          <DividerVertical height="30px" />
          <InputRegular
            placeholder="Price to"
            type="number"
            onFocus={() => setKeyboardActive(true)}
            onBlur={() => setKeyboardActive(false)}
          />
        </HStack>
        <HStack
          borderRadius="8px"
          bg="white"
          spacing="2px"
          flexBasis="30%"
          justify="space-between"
          p="7px"
        >
          <CurrencyButton
            onClick={() => setChosenCurrency('LARI')}
            active={chosenCurrency === 'LARI'}
          >
            ლ
          </CurrencyButton>
          <CurrencyButton
            onClick={() => setChosenCurrency('USD')}
            active={chosenCurrency === 'USD'}
          >
            $
          </CurrencyButton>
          <CurrencyButton
            onClick={() => setChosenCurrency('EUR')}
            active={chosenCurrency === 'EUR'}
          >
            €
          </CurrencyButton>
        </HStack>
      </HStack>
    </Stack>
  );
};
