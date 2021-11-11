import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';

interface SearchButtonProps {}

export const SearchButton: React.FC<SearchButtonProps & ButtonProps> = ({
  h = ['44px', null, '40px'],
  bg = 'autoOrange.500',
  fontSize = ['16px', null,],
  borderRadius = '8px',
  w = {xl: "144px", "2xl": "155px"},
  maxW={xl: "144px", "2xl": "155px"},
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
      maxW={maxW}
      fontSize={fontSize}
      borderRadius={borderRadius}
      _hover={{
        bg: 'autoOrange.500',
      }}
      _active={{
        bg: 'autoOrange.400',
      }}
      {...rest}
    >
      <Icon
        as={SearchIcon}
        mr={['1', null, null, '1.5', null, '12px']}
        boxSize={['4', null, null, null, '4', '5']}
        fill="white"
      />{' '}
      Search
    </Button>
  );
};
