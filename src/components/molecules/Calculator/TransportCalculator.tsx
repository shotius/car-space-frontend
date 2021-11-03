import { VStack, Spacer, Divider, HStack } from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { InputGrey } from '../Inputs/InputGrey';
import { SelectGrey } from '../Selects/SelectGrey';
import { TextRegular } from '../Texts/TextRegular';

interface TransportCalculatorProps {}

export const TransportCalculator: React.FC<TransportCalculatorProps> = ({}) => {
  return (
    <VStack h="full">
      <InputGrey />
      <SelectGrey placeholder="Auction Site">
        <option>one</option>
        <option>one</option>
        <option>one</option>
      </SelectGrey>
      <Spacer />
      <Divider />
      <HStack w="full" justifyContent="space-between">
        <TextRegular>State</TextRegular>
        <TextRegular>_</TextRegular>
      </HStack>
      <HStack w="full" justifyContent="space-between">
        <TextRegular>Total</TextRegular>
        <HeadingSecondary color="autoOrange.500">$ 200</HeadingSecondary>
      </HStack>
    </VStack>
  );
};
