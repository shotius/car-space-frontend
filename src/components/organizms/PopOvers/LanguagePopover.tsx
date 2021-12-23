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
import { GeoIcon } from 'src/components/atoms/Icons/GeoIcon';
import { RusIcon } from 'src/components/atoms/Icons/RusIcon';
import { UKIcon } from 'src/components/atoms/Icons/UKIcon';
import { LanguageSwitcher } from 'src/components/molecules/PopoverBodies/LanguageSwitcher';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppSelector } from 'src/redux/app/hook';

interface LanguagePopoverProps {}

export const LanguagePopover: React.FC<LanguagePopoverProps> = ({}) => {
  const lang = useAppSelector((state) => state.globalAppState.lang);

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
    <Popover placement="bottom">
      <PopoverTrigger>
        {/* here <Text /> is given instead of <TextRegular /> because of ref error */}
        <HStack spacing="2" cursor="pointer">
          <Button
            mr="4"
            w="50px"
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
          <LanguageSwitcher />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
