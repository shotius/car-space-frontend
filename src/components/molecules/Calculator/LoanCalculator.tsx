import { roundFloatTo } from 'src/utils/functions/roundFloatTo';
import {
  Flex,
  HStack,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useAppSelector } from 'src/redux/app/hook';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import {
  safeSum,
  safeSubtraction,
} from '../../../utils/functions/safeOperations';
import { InputGrey } from '../Inputs/InputGrey';
import { SliderBlue } from '../Sliders/SliderBlue';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';

interface LoanCalculatorProps {}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({}) => {
  const [months, setMonths] = useState<number>(3);
  const [loanAmount, setLoanAmount] = useState('');

  const currency = useAppSelector((state) => state.globalAppState.currency);
  const price = useAppSelector((state) => state.globalAppState.currencyPrice);

  const total = loanAmount
    ? safeSum(
        safeSum((+loanAmount * months * 1.7) / 100, +loanAmount),
        50 * price
      )
    : 0;

  const companyInterest = useMemo(() => {
    return safeSubtraction(total, +loanAmount);
  }, [total]);

  const monthlyPayment = useMemo(() => {
    return roundFloatTo(+total / months, 2);
  }, [total]);

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
            showMarks
            min={1}
            max={6}
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
      <VStack w="full" spacing={4}>
        <InputGroup>
          <InputGrey
            placeholder="Loan amount"
            value={loanAmount}
            type="number"
            onChange={(e) => setLoanAmount(e.currentTarget.value)}
          />
          <InputRightElement
            children={currency}
            pr="2"
            opacity={loanAmount ? '0.7' : '0'}
          />
        </InputGroup>

        <HStack w="full" justify="space-between">
          <TextRegular>Company Interest</TextRegular>
          <TextRegular>
            {companyInterest ? (
              <>
                {companyInterest} {currency}
              </>
            ) : (
              '-'
            )}{' '}
          </TextRegular>
        </HStack>

        <HStack w="full" justify={'space-between'}>
          <TextRegular>Monthly</TextRegular>
          <TextRegular>
            {loanAmount ? (
              <>
                {monthlyPayment} {currency}
              </>
            ) : (
              '-'
            )}
          </TextRegular>
        </HStack>
      </VStack>

      <CalculatorFooter total={total} />
    </VStack>
  );
};
