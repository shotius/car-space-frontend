import { Button, Icon, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchButtonProps {
}

export const SearchButton: React.FC<SearchButtonProps & ButtonProps> = ({
  // w=["100px", null,  "20px"],
  h=["44px",null, null,"50px",  "62px"],
  bg="autoOrange.500",
  ...rest
}) => {
  return (
    <Button
      variant="solid"
      bg={bg}
      h={h}
      // w={w}
      w="40px"
      color="#fff"
      fontWeight="light"
      _hover={{
        bg: "autoOrange.400"
      }}
      _active={{
        bg: "autoOrange.200"
      }}
      {...rest}
    >
      <Icon as={BsSearch} mr="1.5" /> Search
    </Button>
  );
};
