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
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
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
        {/* here <Text /> is given instead of <TextRegular /> because of ref error */}
        <Text fontSize={["16px", null, null, "14px", "16px"]} mr="4" cursor="pointer" w="41px" >
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
              <TextRegular fontWeight="light">{Currencies.EUR}</TextRegular>
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setCurrency(Currencies.USD);
                onClose();
              }}
            >
              <TextRegular fontWeight="light">{Currencies.USD}</TextRegular>
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setCurrency(Currencies.GEL);
                onClose();
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
