import { useState } from 'react';

import { safeSum } from '../../../utils/functions/safeOperations';
import { Flex, RadioGroup, VStack } from '@chakra-ui/react';
import { InputGrey } from '../Inputs/InputGrey';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';
import './styles.css';

interface ImportTaxCalculatroProps {}

export const ImportTaxCalculator: React.FC<ImportTaxCalculatroProps> = ({}) => {
  const [year, setYear] = useState<string>('');
  const [engine, setEngine] = useState<string>('');

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setYear(e.currentTarget.value);
  }
  function handleEngineChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEngine(e.currentTarget.value);
  }

  function getAge(year: number) {
    const now = new Date().getFullYear();
    return now - year;
  }

  const importTax =
    engine && year
      ? safeSum(+engine * 1000 * 0.05, +engine * 1000 * getAge(+year) * 0.0025)
      : 0;

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
        <InputGrey
          placeholder="Year"
          type="number"
          value={year}
          onChange={handleYearChange}
        />
        <InputGrey
          placeholder="Engine"
          type="number"
          value={engine}
          onChange={handleEngineChange}
        />
      </VStack>
      <CalculatorFooter total={importTax} />
    </VStack>
  );
};
