import { ButtonProps, IconButton } from '@chakra-ui/button';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

interface ButtonPrevProps {}

export const ButtonPrev = forwardRef<
  HTMLButtonElement,
  ButtonPrevProps & ButtonProps
>(
  (
    {
      bg = 'autoGrey.600',
      top = '50%',
      left = '-15px',
      w = '50px',
      h = '50px',
      ...rest
    },
    ref
  ) => {
    return (
      <IconButton
        top={top}
        left={left}
        w={w}
        h={h}
        bg={bg}
        icon={
          <DropdownIcon transform="translateX(3px)" boxSize={[4, null, 5]} />
        }
        aria-label="previous slide"
        transform="rotate(90deg) translateX(-50%) translateY(5px)"
        position="absolute"
        borderRadius="100px"
        _hover={{
          transform: 'rotate(90deg) translateX(-50%) translateY(9px)',
        }}
        _active={{
          bg: bg,
          transform:
            'rotate(90deg) translateX(-50%) translateY(10px) scale(0.9)',
        }}
        zIndex="1"
        {...rest}
        ref={ref}
      />
    );
  }
);
