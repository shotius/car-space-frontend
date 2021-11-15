import { Button } from '@chakra-ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/popover';
import { PopoverBody, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { CurrencySwitcher } from 'src/components/molecules/PopoverBodies/CurrencySwitcher';
import { useAppSelector } from 'src/redux/app/hook';
import { capitalize } from 'src/utils/functions/capitalize';

interface MobileCurencyPopupverProps {
  popoverDiv: HTMLDivElement;
}

export const MobileCurencyPopover: React.FC<MobileCurencyPopupverProps> = ({
  popoverDiv,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { currency } = useAppSelector((state) => state.globalAppState);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Popover isOpen={isOpen} placement="bottom">
      <PopoverTrigger>
        <Button
          ref={buttonRef}
          w="40%"
          bg="autoGrey.200"
          onClick={() => {
            // scoll bottom to appear popover on bottom of the button
            popoverDiv.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => onToggle(), 100);
          }}
        >
          {capitalize(currency)}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        border="none"
        w={buttonRef.current ? buttonRef.current.clientWidth : '250px'}
      >
        <PopoverBody p="0">
          <CurrencySwitcher
            closeCurrencyPopover={onClose}
            boxShadow="0px 4px 17px #00000029"
            borderRadius="8px"
            p="8px 16px"
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
