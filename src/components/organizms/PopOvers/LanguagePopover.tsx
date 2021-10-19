import { HStack, VStack } from '@chakra-ui/layout';
import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react';
import { UKIcon } from 'src/components/atoms/Icons/UKIcon';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Languages } from 'src/constants/index';


interface LanguagePopoverProps {
  isOpen: boolean;
  closePopover: () => void;
  togglePopover: () => void;
  lang: string;
  setLanguage: (Currencies: Languages) => void;
}

export const LanguagePopover: React.FC<LanguagePopoverProps> = ({
  isOpen,
  closePopover,
  togglePopover,
  lang,
  setLanguage,
}) => {
  return (
    <Popover
      isOpen={isOpen}
      placement="bottom"
    >
      <PopoverTrigger>
        {/* here <Text /> is given instead of <TextRegular /> because of ref error */}
        <HStack spacing="2" cursor="pointer">
          <Icon as={UKIcon} boxSize="20px" />
          <Button
          fontSize={['14px', null, null, null , null, '16px']}
          // mr={['2', null, null, null, '4']}
          pr={[null, null, '4']}
          cursor="pointer"
          onClick={togglePopover}
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
          {lang}
        </Button>
        </HStack>
      </PopoverTrigger>
      <PopoverContent w="70px" outline="none">
        <PopoverArrow />
        <PopoverBody>
          <VStack spacing={1}>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setLanguage(Languages.ENG);
                closePopover();
              }}
            >
              <TextRegular fontWeight="light">{Languages.ENG}</TextRegular>
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setLanguage(Languages.GE);
                closePopover();
              }}
            >
              <TextRegular fontWeight="light">{Languages.GE}</TextRegular>
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
