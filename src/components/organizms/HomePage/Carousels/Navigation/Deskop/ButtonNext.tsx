import { IconButton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

interface ButtonNextProps {}

export const ButtonNext = forwardRef<HTMLButtonElement, ButtonNextProps>(
  ({}, ref) => {
    return (
      <IconButton
        icon={<DropdownIcon transform="translateX(1px)" />}
        aria-label="previous slide"
        transform="rotate(-90deg) translateX(50%) translateY(-15px)"
        position="absolute"
        top="50%"
        right="-35px"
        w="50px"
        h="50px"
        bg="autoGrey.600"
        _hover={{
          transform: 'rotate(-90deg) translateX(50%) translateY(-11px)',
        }}
        _active={{
          bg: 'autoGrey.600',
          transform:
            'rotate(-90deg) translateX(50%) translateY(-11px) scale(0.9)',
        }}
        borderRadius="100px"
        zIndex="1"
        ref={ref}
      />
    );
  }
);
