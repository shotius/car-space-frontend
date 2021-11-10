import { Select } from '@chakra-ui/select';
import { useState } from 'react';
import { ImportTaxCalculator } from 'src/components/molecules/Calculator/ImportTaxCalculator';
import { LeasingCalculator } from 'src/components/molecules/Calculator/LeasingCalculator';
import { LoanCalculator } from 'src/components/molecules/Calculator/LoanCalculator';
import { TransportCalculator } from 'src/components/molecules/Calculator/TransportCalculator';
import { Card } from 'src/components/molecules/Cards/Card';
import "./styles.css"

interface CalculatorMobileProps {}

export const CalculatorMobile: React.FC<CalculatorMobileProps> = ({}) => {
  const [calcType, setCalcType] = useState<string>('1')

  const CalcType = () => {
    switch(calcType) {
      case '1': return <TransportCalculator />
      case '2': return <ImportTaxCalculator /> 
      case '3': return <LoanCalculator /> 
      case '4': return <LeasingCalculator /> 
    }
  }

  return (
    <Card w="full" h="321px" position="relative" p="16px 32px">
      <Select
        m="auto"
        w="137px"
        border="none"
        mb="16px"
        fontFamily='Roboto Medium'
        onChange={(e) => setCalcType(e.currentTarget.value)}
        style={{
          textAlignLast: 'center',
        }}
      >
        <option value={1} className="dropdownSelect">Tranport</option>
        <option value={2} className="dropdownSelect">Import Tax</option>
        <option value={3} className="dropdownSelect">Loan</option>
        <option value={4} className="dropdownSelect">Leasing</option>
      </Select>
      {CalcType()}
    </Card>
  );
};
