import { Button, ButtonProps } from '@chakra-ui/button';
import { forwardRef } from 'react';

interface ButtonRegularProps {}

export const ButtonRegular = forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonRegularProps
>(
  (
    {
      h = ['44px', null, '40px'],
      fontSize = ['16px'],
      borderRadius = '8px',
      variant = 'solid',
      fontWeight = 'light',
      bg = 'autoOrange.500',
      color = "white",
      w="full",
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Button
        variant={variant}
        color={color}
        h={h}
        w={w}
        bg={bg}
        fontWeight={fontWeight}
        fontSize={fontSize}
        borderRadius={borderRadius}
        _hover={{
          bg: bg,
        }}
        _active={{
          bg : "autoOrange.400",
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);
