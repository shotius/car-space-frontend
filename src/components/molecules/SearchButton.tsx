import { Button, Icon, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchButtonProps {}

export const SearchButton: React.FC<SearchButtonProps & ButtonProps> = ({
  ...rest
}) => {
  return (
    <Button
      variant="solid"
      colorScheme="orange"
      flex="1"
      fontWeight="light"
      {...rest}
    >
      <Icon as={BsSearch} mr="1.5" /> Search
    </Button>
  );
};
