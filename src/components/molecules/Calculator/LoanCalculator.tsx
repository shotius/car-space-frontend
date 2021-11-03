import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack, VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { InputGrey } from '../Inputs/InputGrey';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';

interface LoanCalculatorProps {}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({}) => {
  const [value, setValue] = useState<number>(3);
  return (
    <VStack w="full" spacing="32px">
      <VStack w="full" align="flex-start">
        <TextRegular opacity="0.5">Duration</TextRegular>
        <HStack w="full" spacing="30px">
          <Slider
            defaultValue={value}
            min={0}
            max={12}
            step={1}
            onChangeEnd={(val) => setValue(val)}
            w="70%"
          >
            <SliderTrack bg="autoBlue.400">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="autoBlue.400" />
            </SliderTrack>
            <SliderThumb boxSize={5} bg="autoBlue.400" />
          </Slider>
          <TextRegular w="50%">( {value} Months)</TextRegular>
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
