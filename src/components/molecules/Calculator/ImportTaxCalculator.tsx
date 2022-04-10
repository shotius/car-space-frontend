import { Flex, RadioGroup, VStack } from '@chakra-ui/react';
import { InputGrey } from '../Inputs/InputGrey';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';
import './styles.css';

interface ImportTaxCalculatroProps {}

export const ImportTaxCalculator: React.FC<ImportTaxCalculatroProps> = ({}) => {
  return (
    <VStack w="full" h="full" spacing="25px">
      <RadioGroup w="full">
        <Flex w="full" gridGap={'4'}>
          <label htmlFor="electric" className="radio-label">
            <input
              type="radio"
              id="electric"
              name="car_type"
              value="electric"
            />
            <TextRegular opacity="0.4">Electric</TextRegular>
          </label>

          <label htmlFor="Some Spec" className="radio-label">
            <input
              type="radio"
              id="Some Spec"
              name="car_type"
              value="Some Spec"
            />
            <TextRegular opacity="0.4">Some Spec</TextRegular>
          </label>

          <label htmlFor="hybrid" className="radio-label">
            <input type="radio" id="hybrid" name="car_type" value="hybrid" />
            <TextRegular opacity="0.4">Hybrid</TextRegular>
          </label>
        </Flex>
      </RadioGroup>
      <VStack w="full">
        <InputGrey placeholder="Year" type="number" />
        <InputGrey placeholder="Engine" type="number" />
      </VStack>
      <CalculatorFooter />
    </VStack>
  );
};
