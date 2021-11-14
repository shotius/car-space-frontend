import { Button } from '@chakra-ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/popover';
import { PopoverBody, useDisclosure } from '@chakra-ui/react';
import { LanguageSwitcher } from 'src/components/molecules/PopoverBodies/LanguageSwitcher';
import { CurrencyType } from 'src/constants';
import { capitalize } from 'src/utils/functions/capitalize';

interface MobileCurencyPopupverProps {
  currency: CurrencyType;
}

export const MobileCurencyPopover: React.FC<MobileCurencyPopupverProps> = ({
  currency,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover isOpen={isOpen} placement="bottom">
      <PopoverTrigger>
        <Button w="40%" bg="autoGrey.200" onClick={onToggle}>
          {capitalize(currency)}
        </Button>
      </PopoverTrigger>
      <PopoverContent border="none" boxShadow="0px 4px 17px #00000029" w="full">
        <PopoverBody >
        <LanguageSwitcher closePopover={onClose} /> 
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
