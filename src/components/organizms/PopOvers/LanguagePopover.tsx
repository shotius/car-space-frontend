import { HStack, VStack } from '@chakra-ui/layout';
import {
  Button,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { UKIcon } from 'src/components/atoms/Icons/UKIcon';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Languages } from 'src/constants/index';
 ;

interface LanguagePopoverProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  lang: string;
  setLanguage: (Currencies: Languages) => void;
}

export const LanguagePopover: React.FC<LanguagePopoverProps> = ({
  isOpen,
  onClose,
  onOpen,
  lang,
  setLanguage,
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
        <HStack spacing="2" cursor="pointer">
          <Icon as={UKIcon} boxSize="20px" />
          <Text
            cursor="pointer"
            w="40px"
            fontSize={['16px', null, null, '14px', '16px']}
          >
            {lang}
          </Text>
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
                onClose();
              }}
            >
              <TextRegular fontWeight="light">{Languages.ENG}</TextRegular>
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setLanguage(Languages.GE);
                onClose();
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
