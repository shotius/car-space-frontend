import { Button, ButtonProps } from '@chakra-ui/button';
import { forwardRef } from 'react';

interface ButtonRegularProps {}

export const ButtonRegular = forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonRegularProps
>(
  (
    {
      h = ['44px', null, '40px', null, null, '62px'],
      fontSize = ['16px', null, null, null, null, '22px'],
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
          bg,
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);
