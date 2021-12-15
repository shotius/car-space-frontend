import { HStack, RadioGroup, VStack } from '@chakra-ui/react';
import { InputGrey } from '../Inputs/InputGrey';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';
import './styles.css';

interface ImportTaxCalculatroProps {}

export const ImportTaxCalculator: React.FC<ImportTaxCalculatroProps> = ({}) => {
  return (
    <VStack w="full" h="full" spacing="25px">
      <RadioGroup w="full">
        <HStack w="full" spacing="38px">
          <HStack>
            <input type="radio" name="car_type" value="hybrid" />
            <TextRegular opacity="0.4">Electric</TextRegular>
          </HStack>
          <HStack>
            <input type="radio" name="car_type" value="hybrid" />
            <TextRegular opacity="0.4">Electric</TextRegular>
          </HStack> 
          <HStack>
            <input type="radio" name="car_type" value="electric" />
            <TextRegular opacity="0.4">Hybrid</TextRegular>
          </HStack>
        </HStack>
      </RadioGroup>
      <VStack w="full">
        <InputGrey placeholder="Year" type="number" />
        <InputGrey placeholder="Engine" type="number" />
      </VStack>
      <CalculatorFooter />
    </VStack>
  );
};
