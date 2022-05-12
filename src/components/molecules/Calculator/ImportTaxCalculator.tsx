import { useEffect, useState } from 'react';

import { safeSum } from '../../../utils/functions/safeOperations';
import { Flex, RadioGroup, VStack } from '@chakra-ui/react';
import { InputGrey } from '../Inputs/InputGrey';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';
import './styles.css';
import { roundFloatTo } from 'src/utils/functions/roundFloatTo';
import { useAppSelector } from 'src/redux/app/hook';
import { converCurrencyPrice } from 'src/utils/functions/getCurrencyPrice';

interface ImportTaxCalculatroProps {}

function getAge(year: number) {
  const now = new Date().getFullYear();
  return now - year;
}

function getSaaqcizoGanakveti(age: number) {
  const ganakveTebi: Record<number | string, number> = {
    2: 1.5,
    3: 1.4,
    4: 1.2,
    5: 1.0,
    6: 0.8,
    7: 0.8,
    8: 0.8,
    9: 0.9,
    10: 1.1,
    11: 1.3,
    12: 1.5,
    13: 1.8,
    14: 2.1,
    old: 2.4,
  };
  if (age <= 2) {
    return ganakveTebi['2'];
  }
  if (age > 14) {
    return ganakveTebi['old'];
  }
  return ganakveTebi[age];
}
export const ImportTaxCalculator: React.FC<ImportTaxCalculatroProps> = ({}) => {
  const [year, setYear] = useState<string>('');
  const [engine, setEngine] = useState<string>('');
  const [total, setTotal] = useState(0);
  const currency = useAppSelector((state) => state.globalAppState.currency);

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setYear(e.currentTarget.value);
  }
  function handleEngineChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEngine(e.currentTarget.value);
  }

  async function calculateImportTax(engine: number, year: number) {
    if (!engine || !year) {
      return 0;
    }
    const age = getAge(year);
    const importTax = safeSum(
      engine * 1000 * 0.05,
      engine * 1000 * age * 0.0025
    );
    const aqcizi = engine * 1000 * getSaaqcizoGanakveti(age);
    const companyInterest = await converCurrencyPrice({
      from: 'GEL',
      to: currency,
      amount: 200,
    });
    const customsClearance = safeSum(
      safeSum(aqcizi, importTax),
      companyInterest
    );
    return roundFloatTo(customsClearance, 3);
  }

  useEffect(() => {
    calculateImportTax(+engine, +year)
      .then(setTotal)
      .catch(console.log);
  }, [engine, year]);

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
      <CalculatorFooter total={total} />
    </VStack>
  );
};
