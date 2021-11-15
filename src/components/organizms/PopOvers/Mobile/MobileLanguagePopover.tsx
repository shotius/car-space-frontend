import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/popover';
import { useRef } from 'react';
import { GeoIcon } from 'src/components/atoms/Icons/GeoIcon';
import { RusIcon } from 'src/components/atoms/Icons/RusIcon';
import { UKIcon } from 'src/components/atoms/Icons/UKIcon';
import { LanguageSwitcher } from 'src/components/molecules/PopoverBodies/LanguageSwitcher';
import { useAppSelector } from 'src/redux/app/hook';

interface MobileLanguagePopoverProps {
  popupDiv: HTMLDivElement;
}

export const MobileLanguagePopover: React.FC<MobileLanguagePopoverProps> = ({
  popupDiv,
}) => {
  const { lang } = useAppSelector((state) => state.globalAppState);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const triggerRef = useRef<HTMLButtonElement>(null);

  const iconLang = () => {
    switch (lang) {
      case 'Eng':
        return UKIcon;
      case 'Geo':
        return GeoIcon;
      case 'Rus':
        return RusIcon;
    }
  };

  return (
    <Popover isOpen={isOpen} placement="bottom">
      <PopoverTrigger>
        <Button
          w="40%"
          bg="autoGrey.200"
          _hover={{
            bg: "autoGrey.100"
          }}
          _active={{
            bg: "autoGrey.200"
          }}
          ref={triggerRef}
          onClick={() => {
            popupDiv.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => onToggle(), 150);
          }}
        >
          <Icon as={iconLang()} boxSize="6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        border="none"
        w={triggerRef.current ? `calc(${triggerRef.current.clientWidth}px + 25px)` : '150px'}
        mt="-8px"
      >
        <PopoverBody>
          <LanguageSwitcher
            closePopover={onClose}
            boxShadow="0px 4px 17px #00000029"
            borderRadius="8px"
            p="8px 16px"
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
