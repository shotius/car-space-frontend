import { VStack } from '@chakra-ui/layout';
import {
  Popover,
  Text,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Button,
} from '@chakra-ui/react';
import { Currencies } from 'src/constants/index';
import React from 'react';

interface CurrencyPopoverProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  currency: string;
  setCurrency: (Currencies: Currencies) => void;
}

export const CurrencyPopover: React.FC<CurrencyPopoverProps> = ({
  isOpen,
  onClose,
  onOpen,
  currency,
  setCurrency,
}) => {
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
    >
      <PopoverTrigger>
        <Text cursor="pointer" w="50px">
          {currency}
        </Text>
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
                onClose();
              }}
            >
              {Currencies.EUR}
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setCurrency(Currencies.USD);
                onClose();
              }}
            >
              {Currencies.USD}
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setCurrency(Currencies.GEL);
                onClose();
              }}
            >
              {Currencies.GEL}
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
