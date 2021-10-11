import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import React from 'react';

interface SearchButtonProps {}

export const SearchButton: React.FC<SearchButtonProps & ButtonProps> = ({
  h = ['44px', null, '50px', null, '62px'],
  bg = 'autoOrange.500',
  fontSize = ['16px', null, null, null, '22px'],
  borderRadius = '8px',
  w = 'full',
  variant = 'solid',
  color = '#fff',
  fontWeight = 'light',
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      bg={bg}
      h={h}
      w={w}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      borderRadius={borderRadius}
      _hover={{
        bg: 'autoOrange.400',
      }}
      _active={{
        bg: 'autoOrange.200',
      }}
      {...rest}
    >
      <Icon
        as={SearchIcon}
        mr={['1', null, null, '1.5']}
        boxSize={['4', null, null, '5', '6']}
      />{' '}
      Search
    </Button>
  );
};
