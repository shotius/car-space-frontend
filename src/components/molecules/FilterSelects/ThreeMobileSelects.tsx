import { HStack, Stack } from '@chakra-ui/layout';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { Select } from 'src/components/atoms/Select';
import { CurentyType } from 'src/constants';
import { CurrencyButton } from '../Buttons/CurrencyButton';
import { InputRegular } from '../Inputs/InputRegular';

interface ThreeMobileSelectsProps {
  setIsInputFocused: (a: boolean) => void;
}

export const ThreeMobileSelects: React.FC<ThreeMobileSelectsProps> = ({
  setIsInputFocused: setKeyboardActive,
}) => {
  const [chosenCurrency, setChosenCurrency] = useState<CurentyType>('LARI');

  return (
    <Stack display={['flex', 'none']}>
      <Select placeholder="Brand">
        <option>Brand1</option>
        <option>Brand2</option>
        <option>Brand3</option>
      </Select>
      <Select placeholder="Model"></Select>
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
