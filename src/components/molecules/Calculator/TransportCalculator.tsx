import { HStack, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { InputGrey } from '../Inputs/InputGrey';
import { SelectGrey } from '../Selects/SelectGrey';
import { TextRegular } from '../Texts/TextRegular';
import { SizeContext } from '../../organizms/Calculator/CalculatorDesktop';
import { CalculatorFooter } from './CalculatorFooter';

interface TransportCalculatorProps {}

export const TransportCalculator: React.FC<TransportCalculatorProps> = ({}) => {
  const size = useContext(SizeContext);

  return (
    <VStack h="full">
      <InputGrey placeholder="Location" />
      <SelectGrey placeholder="Auction Site">
        <option>one</option>
        <option>one</option>
        <option>one</option>
      </SelectGrey>
      <CalculatorFooter>
        <HStack w="full" justifyContent="space-between">
          <TextRegular>State</TextRegular>
          <TextRegular>_</TextRegular>
        </HStack>
        <HStack w="full" justifyContent="space-between">
          <TextRegular>Total</TextRegular>
          <HeadingSecondary
            color="autoOrange.500"
            fontSize={size === 'regular' ? '16px' : '20px'}
          >
            $ 200
          </HeadingSecondary>
        </HStack>
      </CalculatorFooter>
    </VStack>
  );
};
