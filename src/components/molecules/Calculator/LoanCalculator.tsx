import {
  HStack, VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { InputGrey } from '../Inputs/InputGrey';
import { SliderBlue } from '../Sliders/SliderBlue';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';

interface LoanCalculatorProps {}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({}) => {
  const [value, setValue] = useState<number>(3);
  return (
    <VStack w="full" spacing={['24px', null, '32px']}>
      <VStack w="full" align="flex-start">
        <TextRegular opacity="0.5">Duration</TextRegular>
        <HStack w="full" spacing="30px" justify="space-between">
          <SliderBlue
            defaultValue={value}
            min={1}
            max={12}
            step={1}
            onChange={(val) => setValue(val)}
            w="70%"
          />
          <TextRegular w="120px" textAlign="end">
            ( {value} Months)
          </TextRegular>
        </HStack>
      </VStack>
      <VStack w="full">
        <InputGrey placeholder="Loan amount" />
        <InputGrey placeholder="Percentage" />
      </VStack>
      <CalculatorFooter></CalculatorFooter>
    </VStack>
  );
};
