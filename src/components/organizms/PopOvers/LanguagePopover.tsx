import { VStack } from '@chakra-ui/layout';
import {
  Button,
  Icon, Popover, PopoverArrow,
  PopoverBody, PopoverContent, PopoverTrigger, Text
} from '@chakra-ui/react';
import { Languages } from 'src/constants/index';
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
        <Text cursor="pointer" w="60px">
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
              {Languages.ENG}
            </Button>
            <Button
              borderRadius="none"
              bg="white"
              onClick={() => {
                setLanguage(Languages.GE);
                onClose();
              }}
            >
              {Languages.GE}
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
