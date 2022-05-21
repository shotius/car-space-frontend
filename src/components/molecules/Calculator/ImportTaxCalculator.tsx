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
import { ScrollableList } from '../ScrollableList';
import { range } from 'src/utils/functions/range';
import { YearSelectScrollable } from '../YearSelectScrollable';
import { SelectOptions } from '../Wrappers/SelectOptions';
import { YearSelect } from '../FilterSelects/desktop/YearSelect';
import { SingleYearSelect } from '../selects/SingleYearSelect';
import { capitalize } from 'src/utils/functions/capitalize';

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

const options = ['electric', 'hybrid', 'right wheel'] as const;
export const ImportTaxCalculator: React.FC<ImportTaxCalculatroProps> = ({}) => {
  const [year, setYear] = useState(0);
  const [engine, setEngine] = useState<string>('');
  const [total, setTotal] = useState(0);
  const [engineType, setEngineType] = useState<typeof options[number] | null>(
    null
  );
  const currency = useAppSelector((state) => state.globalAppState.currency);

  function handleEngineChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEngine(e.currentTarget.value);
  }
  function handleYearSelect(year: number) {
    setYear(year);
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
      amount: 272,
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
  }, [engine, year, currency]);

  return (
    <VStack w="full" h="full" spacing="25px">
      <RadioGroup w="full" name="car_type">
        <Flex w="full" gridGap={'4'}>
          {options.map((value) => (
            <label
              key={value}
              htmlFor={value}
              className="radio-label"
              onClick={() => setEngineType(value)}
            >
              <input type="radio" checked={engineType === value} />
              <TextRegular opacity="0.4">{capitalize(value)}</TextRegular>
            </label>
          ))}
        </Flex>
      </RadioGroup>
      <VStack w="full">
        <SingleYearSelect value={year} onChange={handleYearSelect} />
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
