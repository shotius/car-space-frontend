import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { SearchIcon } from 'src/components/atoms/Icons/SearchIcon';
import { TextRegular } from '../Texts/TextRegular';

interface SearchButtonProps {
  isKeyboardActive?: boolean;
}

export const SearchButton = forwardRef<
  HTMLButtonElement,
  SearchButtonProps & ButtonProps
>(
  (
    {
      h = ['44px', null, '40px'],
      bg = 'autoOrange.500',
      fontSize = ['16px', null],
      borderRadius = '8px',
      w = { xl: '144px', '2xl': '155px' },
      maxW = { xl: '144px', '2xl': '155px' },
      variant = 'solid',
      color = '#fff',
      fontWeight = 'light',
      isKeyboardActive,
      ...rest
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
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
          opacity: "0.8", 
          bg: 'autoOrange.500',
        }}
        _active={{
          bg: 'autoOrange.400',
        }}
        {...rest}
      >
        {isKeyboardActive ? (
          <TextRegular>Apply</TextRegular>
        ) : (
          <>
            <Icon
              as={SearchIcon}
              mr={['1', null, null, '1.5', null, '12px']}
              boxSize={['4', null, null, null, '4', '5']}
              fill="white"
            />{' '}
            Search
          </>
        )}
      </Button>
    );
  }
);
