import { Button, ButtonProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

export const ButtonRect = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fontSize = '16px',bg="white", w="full", fontWeight="400",  children,  ...rest }, ref) => {
    return (
      <Button
        bg={bg}
        w={w}
        borderRadius="none"
        fontSize={fontSize}
        fontWeight={fontWeight}
        _hover={{
          bg: 'autoGrey.100',
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);
