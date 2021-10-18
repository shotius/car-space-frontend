import { VStack } from '@chakra-ui/layout';
import {
  Button, Popover, PopoverArrow,
  PopoverBody, PopoverContent, PopoverTrigger
} from '@chakra-ui/react';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Currencies } from 'src/constants/index';
// import {Text} from '@chakra-ui/react'

interface CurrencyPopoverProps {
  isOpen: boolean;
  // onOpen: () => void;
  toggleCurrency: () => void;
  closeCurrency: () => void;
  currency: string;
  setCurrency: (Currencies: Currencies) => void;
}

export const CurrencyPopover: React.FC<CurrencyPopoverProps> = ({
  isOpen,
  currency,
  setCurrency,
  toggleCurrency,
  closeCurrency
}) => {
  return (
    <Popover
      isOpen={isOpen}
      placement="bottom"
    >
      <PopoverTrigger>
       {/* writing here imported component causes problems */}
        <Button
          fontSize={['14px', null, null, null , null, '16px']}
          mr={['2', null, null, null, '4']}
          cursor="pointer"
          onClick={toggleCurrency}
          variant="ghost"
          fontWeight="light"
          _hover={{
            bg: "transparent"
          }}
          _active={{
            bg: "transparent"
          }}
          minW="0px"
          w="auto"
          p="0"
        >
          {currency}
        </Button>
      </PopoverTrigger>
      <PopoverContent w="80px" outline="none">
        <PopoverArrow />
        <PopoverBody>
          <VStack spacing={1}>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setCurrency(Currencies.EUR);
                closeCurrency();
              }}
            >
              <TextRegular fontWeight="light">{Currencies.EUR}</TextRegular>
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setCurrency(Currencies.USD);
                closeCurrency();
              }}
            >
              <TextRegular fontWeight="light">{Currencies.USD}</TextRegular>
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setCurrency(Currencies.GEL);
                closeCurrency();
              }}
            >
              <TextRegular fontWeight="light">{Currencies.GEL}</TextRegular>
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
