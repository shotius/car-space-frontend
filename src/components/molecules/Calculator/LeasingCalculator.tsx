import { HStack, Spacer, VStack } from '@chakra-ui/react';
import { InputGrey } from '../Inputs/InputGrey';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';

interface LeasingCalculatorProps {}

export const LeasingCalculator: React.FC<LeasingCalculatorProps> = ({}) => {
  return (
    <VStack w="full" spacing="4">
      <VStack w="full">
        <InputGrey placeholder="Car Price" />
        <InputGrey placeholder="Interest" />
      </VStack>
      <HStack w="full" justify="space-between">
        <TextRegular>Payable deposit(20%)</TextRegular>
        <TextRegular> - </TextRegular>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular>80%</TextRegular>
        <TextRegular> $10 000 </TextRegular>
      </HStack>
      <Spacer /> 
      <CalculatorFooter /> 
    </VStack>
  );
};
