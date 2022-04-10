import { Flex, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppSelector } from 'src/redux/app/hook';
import { safeSum } from '../../../utils/functions/safeOperations';
import { InputGrey } from '../Inputs/InputGrey';
import { SliderBlue } from '../Sliders/SliderBlue';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';

interface LoanCalculatorProps {}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({}) => {
  const [months, setMonths] = useState<number>(3);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  // const [percentage, setPercentage] = useState<number>(0);

  const currency = useAppSelector((state) => state.globalAppState.currency);
  const price = useAppSelector((state) => state.globalAppState.currencyPrice);

  const total = loanAmount
    ? safeSum(
        safeSum((loanAmount * months * 1.7) / 100, loanAmount),
        50 * price
      )
    : 0;

  return (
    <VStack w="full" spacing={['24px', null, '32px']}>
      <VStack w="full" align="flex-start">
        <TextRegular opacity="0.5">Duration</TextRegular>
        <Flex
          w="full"
          justify="space-between"
          flexWrap="nowrap"
          style={{ gap: 16 }}
        >
          <SliderBlue
            sliderValue={months}
            defaultValue={months}
            min={1}
            max={12}
            step={1}
            onChange={(val) => setMonths(val)}
            flex={['1', '0']}
            flexBasis={[null, '60%', '67%']}
          />
          <TextRegular textAlign="end" minW="96px" wordBreak="keep-all">
            ( {months} Months)
          </TextRegular>
        </Flex>
      </VStack>
      <VStack w="full">
        <InputGroup>
          <InputGrey
            placeholder="Loan amount"
            value={loanAmount || ''}
            type="number"
            onChange={(e) => setLoanAmount(parseInt(e.currentTarget.value))}
          />
          <InputRightElement
            children={currency}
            pr="2"
            opacity={loanAmount ? '0.7' : '0'}
          />
        </InputGroup>
        {/* <InputGroup>
          <InputGrey
            placeholder="Percentage"
            value={percentage || ''}
            type="number"
            onChange={(e) => {
              // percentages are in [0, 100] range
              const val = parseInt(e.currentTarget.value);
              if (val > 0 && val <= 100) {
                setPercentage(val);
              } else if (e.currentTarget.value === '') {
                setPercentage(0);
              }
            }}
          />
          <InputRightElement children="%" opacity={percentage ? '0.7' : '0'} />
        </InputGroup> */}
      </VStack>
      <CalculatorFooter total={total} />
    </VStack>
  );
};
