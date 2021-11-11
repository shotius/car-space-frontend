import { HStack, VStack } from '@chakra-ui/layout';
import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { GeoIcon } from 'src/components/atoms/Icons/GeoIcon';
import { RusIcon } from 'src/components/atoms/Icons/RusIcon';
import { UKIcon } from 'src/components/atoms/Icons/UKIcon';
import { ButtonRect } from 'src/components/molecules/Buttons/ButtonRect';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Languages } from 'src/constants/index';

interface LanguagePopoverProps {
  isOpen: boolean;
  closePopover: () => void;
  togglePopover: () => void;
  lang: Languages;
  setLanguage: (Currencies: Languages) => void;
}

export const LanguagePopover: React.FC<LanguagePopoverProps> = ({
  isOpen,
  closePopover,
  togglePopover,
  lang,
  setLanguage,
}) => {
  const icon = () => {
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
        {/* here <Text /> is given instead of <TextRegular /> because of ref error */}
        <HStack spacing="2" cursor="pointer">
          <Button
            mr="4"
            w="50px"
            onClick={togglePopover}
            variant="ghost"
            fontWeight="light"
            _hover={{
              bg: 'transparent',
            }}
            _active={{
              bg: 'transparent',
            }}
            minW="0px"
            p="0"
          >
            <Icon as={icon()} boxSize="20px" mr="2" />
            <TextRegular pt="1px">{lang}</TextRegular>
          </Button>
        </HStack>
      </PopoverTrigger>
      <PopoverContent w="70px" outline="none">
        <PopoverArrow />
        <PopoverBody p="0">
          <VStack spacing={1} p="0">
            <ButtonRect
              onClick={() => {
                setLanguage('Eng');
                closePopover();
              }}
            >
              <Icon as={UKIcon} mr="2" />
              <TextRegular fontWeight="light">Eng</TextRegular>
            </ButtonRect>
            <ButtonRect
              onClick={() => {
                setLanguage('Geo');
                closePopover();
              }}
            >
              <Icon as={GeoIcon} mr="2" />
              <TextRegular fontWeight="light">Geo</TextRegular>
            </ButtonRect>
            <ButtonRect
              onClick={() => {
                setLanguage('Rus');
                closePopover();
              }}
            >
              <Icon as={RusIcon} mr="2" />
              <TextRegular fontWeight="light">Rus</TextRegular>
            </ButtonRect>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
