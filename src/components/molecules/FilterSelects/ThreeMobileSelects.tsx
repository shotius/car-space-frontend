import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { HStack, Stack } from '@chakra-ui/layout';
import { useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { Select } from 'src/components/atoms/Select';
import { CurentyType } from 'src/constants';
import { CurrencyButton } from '../Buttons/CurrencyButton';
interface ThreeMobileSelectsProps {}

export const ThreeMobileSelects: React.FC<ThreeMobileSelectsProps> = () => {
  const [chosenCurrency, setChosenCurrency] = useState<CurentyType>('LARI');

  return (
    <Stack display={['flex', 'none']}>
      <Select placeholder="Brand"></Select>
      <Select placeholder="Model"></Select>
      <Select placeholder="Year"></Select>
      <HStack justify="space-between">
        <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
          <Input
            outline="none"
            border="none"
            placeholder="Price from"
            type="number"
            opacity="0.7"
            _placeholder={{ fontSize: '16px', color: '#000', opacity: '.5' }}
          />
          <DividerVertical height="30px" />
          <Input
            outline="none"
            border="none"
            placeholder="Price to"
            type="number"
            opacity="0.7"
            _placeholder={{ fontSize: '16px', color: '#000', opacity: '.5' }}
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
