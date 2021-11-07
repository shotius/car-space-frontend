import { IconButton } from '@chakra-ui/button';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

interface ButtonPrevProps {}

export const ButtonPrev = forwardRef<HTMLButtonElement, ButtonPrevProps>(
  ({}, ref) => {
    return (
      <IconButton
        icon={<DropdownIcon transform="translateX(3px)" />}
        aria-label="previous slide"
        transform="rotate(90deg) translateX(-50%) translateY(5px)"
        position="absolute"
        top="50%"
        left="-15px"
        w="50px"
        h="50px"
        bg="autoGrey.600"
        borderRadius="100px"
        _hover={{
          transform: 'rotate(90deg) translateX(-50%) translateY(9px)',
        }}
        _active={{
          bg: 'autoGrey.600',
          transform:
            'rotate(90deg) translateX(-50%) translateY(10px) scale(0.9)',
        }}
        zIndex="1"
        ref={ref}
      />
    );
  }
);
