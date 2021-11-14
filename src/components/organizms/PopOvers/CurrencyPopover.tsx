import { HStack } from '@chakra-ui/layout';
import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { GelIcon } from 'src/components/atoms/Icons/GelIcon';
import { UsdIcon } from 'src/components/atoms/Icons/UsdIcon';
import { CurrencySwitcher } from 'src/components/molecules/PopoverBodies/CurrencySwitcher';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppSelector } from 'src/redux/app/hook';

interface CurrencyPopoverProps {
  isOpen: boolean;
  togglePopover: () => void;
  closePopover: () => void;
}

export const CurrencyPopover: React.FC<CurrencyPopoverProps> = ({
  isOpen,
  togglePopover,
  closePopover,
}) => {
  const { currency } = useAppSelector((state) => state.globalAppState);

  // based on currency will return different content for trigger button
  const triggerContent = () => {
    switch (currency) {
      case 'USD':
        return (
          <>
            <Icon as={UsdIcon} boxSize={6} />
            <TextRegular fontSize="16px" mt="2px">
              Usd
            </TextRegular>
          </>
        );
      case 'EUR':
        return (
          <HStack pt="1px" pl="1">
            <TextRegular fontSize="18px">€</TextRegular>
            <TextRegular fontSize="16px">Eur</TextRegular>
          </HStack>
        );
      case 'GEL':
        return (
          <>
            <Icon as={GelIcon} boxSize={6} />
            <TextRegular fontSize="16px" pt="3px">
              Gel
            </TextRegular>
          </>
        );
    }
  };

  return (
    <Popover isOpen={isOpen} placement="bottom">
      <PopoverTrigger>
        <Button
          borderRadius="none"
          bg="white"
          fontWeight="400"
          w="50px"
          mr="2"
          pl="0"
          fontSize="14px"
          _hover={{
            bg: 'transparent',
          }}
          _active={{
            bg: 'transparent',
          }}
          onClick={togglePopover}
        >
          {triggerContent()}
        </Button>
      </PopoverTrigger>
      <PopoverContent w="80px" outline="none">
        <PopoverArrow />
        <PopoverBody p="0">
          <CurrencySwitcher closeCurrencyPopover={closePopover} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
