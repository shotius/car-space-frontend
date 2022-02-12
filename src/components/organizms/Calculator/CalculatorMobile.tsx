import { Flex, HStack, VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { ImportTaxCalculator } from 'src/components/molecules/Calculator/ImportTaxCalculator';
import { LeasingCalculator } from 'src/components/molecules/Calculator/LeasingCalculator';
import { LoanCalculator } from 'src/components/molecules/Calculator/LoanCalculator';
import { TransportCalculator } from 'src/components/molecules/Calculator/TransportCalculator';
import { Card } from 'src/components/molecules/Cards/Card';
import { CurrencySwitcherButtons } from 'src/components/molecules/CurrencySwitcherButtons';
import { SingleSelect } from 'src/components/molecules/Selects/SingleSelect';
import './styles.css';

interface CalculatorMobileProps {}

type CalculatorTypes = 'Transport' | 'Import tax' | 'Loan' | 'Leasing';

export const CalculatorMobile: React.FC<CalculatorMobileProps> = ({}) => {
  const [calcType, setCalcType] = useState<CalculatorTypes>('Transport');

  const CalcType = () => {
    switch (calcType) {
      case 'Transport':
        return <TransportCalculator />;
      case 'Import tax':
        return <ImportTaxCalculator />;
      case 'Loan':
        return <LoanCalculator />;
      case 'Leasing':
        return <LeasingCalculator />;
    }
  };

  const options: CalculatorTypes[] = [
    'Import tax',
    'Leasing',
    'Transport',
    'Loan',
  ];

  return (
    <Card w="full" h="321px" position="relative" p="16px 32px">
      <HStack w="full" alignItems={"center"} mb="4" justify="space-between">
        <Flex w="100px">
          <SingleSelect selected={calcType} w="130px">
            <VStack m="auto" align="flex-start" spacing="4" p="3" zIndex={"10000"}>
              {options
                .filter((opt) => opt !== calcType)
                .map((opt) => (
                  <TextButton key={opt} onClick={() => setCalcType(opt)}>
                    {opt}
                  </TextButton>
                ))}
            </VStack>
          </SingleSelect>
        </Flex>
          <CurrencySwitcherButtons p="0" />
      </HStack>
      {CalcType()}
    </Card>
  );
};
