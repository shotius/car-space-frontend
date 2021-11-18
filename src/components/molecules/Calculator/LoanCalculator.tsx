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
    <VStack w="full" spacing={["24px",null,  "32px"]}>
      <VStack w="full" align="flex-start">
        <TextRegular opacity="0.5">Duration</TextRegular>
        <HStack w="full" spacing="30px" justify="space-between">
          <Slider
            defaultValue={value}
            min={1}
            max={12}
            step={1}
            onChange={(val) => setValue(val)}
            w="70%"
          >
            <SliderTrack bg="autoBlue.400" h="2px">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="autoBlue.400" />
            </SliderTrack>
            <SliderThumb boxSize={4} bg="autoBlue.400" />
          </Slider>
          <TextRegular w="100px" textAlign="end">( {value} Months)</TextRegular>
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
