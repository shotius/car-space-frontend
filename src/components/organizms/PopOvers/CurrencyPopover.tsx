import { VStack } from '@chakra-ui/layout';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { CurrencyType } from 'src/constants/index';
import { ButtonEur } from './CurrencyButtons/EurButton';
import { ButtonGel } from './CurrencyButtons/GelButton';
import { ButtonUsd } from './CurrencyButtons/UsdButton';
// import {Text} from '@chakra-ui/react'

interface CurrencyPopoverProps {
  isOpen: boolean;
  // onOpen: () => void;
  toggleCurrency: () => void;
  closeCurrency: () => void;
  currency: CurrencyType;
  setCurrency: (Currencies: CurrencyType) => void;
}

export const CurrencyPopover: React.FC<CurrencyPopoverProps> = ({
  isOpen,
  currency,
  setCurrency,
  toggleCurrency,
  closeCurrency,
}) => {
  const trigger = () => {
    switch (currency) {
      case 'USD':
        return (
          <ButtonUsd
            w="50px"
            mr="2"
            pl="0"
            _hover={{ bg: 'white' }}
            fontSize="14px"
            onClick={toggleCurrency}
          />
        );
      case 'EUR':
        return (
          <ButtonEur
            w="50px"
            pl="0"
            mr="2"
            _hover={{ bg: 'white' }}
            fontSize="14px"
            onClick={toggleCurrency}
          />
        );
      case 'GEL':
        return (
          <ButtonGel
            w="50px"
            pl="0"
            mr="2"
            _hover={{ bg: 'white' }}
            fontSize="14px"
            onClick={toggleCurrency}
          />
        );
    }
  };

  return (
    <Popover isOpen={isOpen} placement="bottom">
      <PopoverTrigger>
        {/* writing here imported component causes problems */}
        {trigger()}
      </PopoverTrigger>
      <PopoverContent w="80px" outline="none">
        <PopoverArrow />
        <PopoverBody p="0">
          <VStack spacing={0} p="0">
            <ButtonGel
              onClick={() => {
                setCurrency('GEL');
                closeCurrency();
              }}
            />
            <ButtonUsd
              onClick={() => {
                setCurrency('USD');
                closeCurrency();
              }}
            />
            <ButtonEur
              onClick={() => {
                setCurrency('EUR');
                closeCurrency();
              }}
            />
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
