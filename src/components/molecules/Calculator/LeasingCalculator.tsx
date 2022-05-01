import { HStack, Spacer, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { roundFloatTo } from 'src/utils/functions/roundFloatTo';
import useCurrencyIcon from 'src/utils/hooks/useCurrencyIcon';
import { InputGrey } from '../Inputs/InputGrey';
import { NotSpecified } from '../Texts/NotSpecified';
import { TextRegular } from '../Texts/TextRegular';
import { CalculatorFooter } from './CalculatorFooter';

interface LeasingCalculatorProps {}

export const LeasingCalculator: React.FC<LeasingCalculatorProps> = ({}) => {
  const [price, setPrice] = useState('');
  const icon = useCurrencyIcon();

  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPrice(e.currentTarget.value);
  }

  function getDeposit(price: number) {
    const deposit = price * 0.2;
    return roundFloatTo(deposit, 3);
  }

  function getPercentage(price: number) {
    const percent = price * 0.8;
    return roundFloatTo(percent, 3);
  }

  return (
    <VStack w="full" spacing="4">
      <VStack w="full">
        <InputGrey
          placeholder="Car Price"
          value={price}
          type="number"
          onChange={handlePriceChange}
        />
      </VStack>
      <HStack w="full" justify="space-between">
        <TextRegular>Payable deposit(20%)</TextRegular>
        <TextRegular>
          {' '}
          {price ? (
            <>
              {icon} {getDeposit(+price)}
            </>
          ) : (
            <NotSpecified />
          )}{' '}
        </TextRegular>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular>80%</TextRegular>
        <TextRegular>
          {price ? (
            <>
              {icon} {getPercentage(+price)}
            </>
          ) : (
            <NotSpecified />
          )}
        </TextRegular>
      </HStack>
      <Spacer />
      <CalculatorFooter />
    </VStack>
  );
};
