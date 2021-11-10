import { VStack } from '@chakra-ui/layout';
import {
  Button,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { EuroIcon } from 'src/components/atoms/Icons/EuroIcon';
import { GelIcon } from 'src/components/atoms/Icons/GelIcon';
import { UsdIcon } from 'src/components/atoms/Icons/UsdIcon';
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
  closeCurrency,
}) => {
  return (
    <Popover isOpen={isOpen} placement="bottom">
      <PopoverTrigger>
        {/* writing here imported component causes problems */}
        <Button
          fontSize={['14px', null, null, null, null, '16px']}
          mr={['2', null, null, null, '4']}
          cursor="pointer"
          onClick={toggleCurrency}
          variant="ghost"
          fontWeight="light"
          _hover={{
            bg: 'transparent',
          }}
          _active={{
            bg: 'transparent',
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
          <VStack spacing={4}>
            <HStack
              w="full"
              spacing="0"
              onClick={() => {
                setCurrency(Currencies.GEL);
                closeCurrency();
              }}
            >
              <Icon as={GelIcon} boxSize={6} />
              <TextRegular fontSize="16px">Gel</TextRegular>
            </HStack>
            <HStack
              w="full"
              spacing="0"
              onClick={() => {
                setCurrency(Currencies.USD);
                closeCurrency();
              }}
            >
              <Icon as={UsdIcon} boxSize={6} />
              <TextRegular fontSize="16px">Usd</TextRegular>
            </HStack>
            <HStack
              spacing="0"
              pl="2px"
              w="full"
              onClick={() => {
                setCurrency(Currencies.EUR);
                closeCurrency();
              }}
            >
              <Icon as={EuroIcon} boxSize={6} />
              <TextRegular fontSize="16px">Eur</TextRegular>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
