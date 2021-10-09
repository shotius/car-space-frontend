import { VStack } from '@chakra-ui/layout';
import {
  Button,
  Icon, Popover, PopoverArrow,
  PopoverBody, PopoverContent, PopoverTrigger, Text
} from '@chakra-ui/react';
import { TextRegular } from 'components/molecules/Texts/TextRegular';
import { Languages } from 'constants/index';
import React from 'react';

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
        <Text cursor="pointer" w="60px" fontSize={["16px", null, null, "14px", "16px"]}>
          <Icon /> {lang}
        </Text>
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
