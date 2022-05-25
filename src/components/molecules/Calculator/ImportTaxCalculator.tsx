import { Flex, RadioGroup, VStack } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from 'src/redux/app/hook';
import { capitalize } from 'src/utils/functions/capitalize';
import { converCurrencyPrice } from 'src/utils/functions/getCurrencyPrice';
import { range } from 'src/utils/functions/range';
// import { range } from 'src/utils/functions/range';
import { roundFloatTo } from 'src/utils/functions/roundFloatTo';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { useEngineSelect } from 'src/utils/hooks/useEngineSelect';
import { safeSum } from '../../../utils/functions/safeOperations';
import { InputGrey } from '../Inputs/InputGrey';
import { SingleSelectDemo } from '../selects/SingleSelectDemo';
// import { SingleSelectDemo } from '../selects/SingleSelect';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';
import './styles.css';

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

const options = ['petrol', 'electric', 'hybrid'] as const;

export const ImportTaxCalculator: React.FC<ImportTaxCalculatroProps> = ({}) => {
  const [year, setYear] = useState(0);
  const [engine, setEngine] = useState<string>('');
  const [total, setTotal] = useState(0);
  const [engineType, setEngineType] =
    useState<typeof options[number]>('petrol');
  const currency = useAppSelector((state) => state.globalAppState.currency);
  const currencyPrice = useAppSelector(
    (state) => state.globalAppState.currencyPrice
  );
  const { generatedEngines } = useEngineSelect();

  function handleEngineSelect(engine: string) {
    setEngine(engine);
  }
  function handleYearSelect(year: string) {
    setYear(+year);
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
    const constantFee = await converCurrencyPrice({
      from: 'GEL',
      to: currency,
      amount: 272,
    });

    const customsClearance = safeSum(safeSum(aqcizi, importTax), constantFee);

    return roundFloatTo(customsClearance, 3);
  }

  async function converTotal(total: number) {
    try {
      const result = await converCurrencyPrice({
        from: 'GEL',
        to: currency,
        amount: total,
      });
      return result;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  useEffect(() => {
    calculateImportTax(+engine, +year)
      .then(converTotal)
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
              <input
                type="radio"
                checked={engineType === value}
                onChange={() => {}}
              />
              <TextRegular opacity="0.4">{capitalize(value)}</TextRegular>
            </label>
          ))}
        </Flex>
      </RadioGroup>
      <VStack w="full">
        <SingleSelectDemo
          value={year.toString()}
          onChange={handleYearSelect}
          placeholder="Year"
          options={range(1960, new Date().getFullYear())
            .map((value) => value.toString())
            .reverse()}
        />
        <SingleSelectDemo
          value={engine}
          placeholder="Engine"
          onChange={handleEngineSelect}
          options={generatedEngines(0.1, 9).map((value) => value.toString())}
        />
      </VStack>
      <CalculatorFooter total={total} />
    </VStack>
  );
};
