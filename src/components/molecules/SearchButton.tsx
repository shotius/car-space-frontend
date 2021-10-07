import { Button, Icon, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchButtonProps {
}

export const SearchButton: React.FC<SearchButtonProps & ButtonProps> = ({
  // h=["44px",null, null,"50px",  "62px"],

  h=[null,null, null,"50px",  "62px"],
  bg="autoOrange.500",
  variant="solid",
  color="#fff",
  fontWeight="light",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      bg={bg}
      h={h}
      color={color}
      fontWeight={fontWeight}
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
