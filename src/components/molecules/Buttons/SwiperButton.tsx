import { IconButton, IconButtonProps } from '@chakra-ui/button';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { forwardRef } from 'react';

interface SwiperButtonsProps {
  isVisible: boolean;
  side?: 'right' | 'left';
}

export const SwiperButton = forwardRef<
  HTMLButtonElement,
  SwiperButtonsProps & IconButtonProps
>(
  (
    { isVisible, zIndex = '2', side, ...rest },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <IconButton
        position="absolute"
        right={side === 'right' ? '0' : 'null'}
        left={side === 'left' ? '0' : 'null'}
        zIndex={zIndex}
        ref={ref}
        icon={<DropdownIcon fill="white" boxSize="5" ml="5px" />}
        borderRadius="none"
        transform={side === 'right' ? 'rotate(-90deg)' : 'rotate(270deg)'}
        bg="black"
        w={{ md: '50px', '2xl': '70px' }}
        mr={side === 'right' ? { md: '-10px', '2xl': '-15px' } : '0px'}
        ml={side === 'left' ? { md: '-10px', '2xl': '-15px' } : '0px'}
        borderTopRadius={side === 'right' ? '100px' : '0px'}
        borderBottomRadius={side === 'left' ? '100px' : '0px'}
        opacity=".65"
        display={isVisible ? 'block' : 'none'}
        _hover={{
          bg: 'black',
        }}
        _active={{
          bg: 'black',
          opacity: '.9',
        }}
        {...rest}
      />
    );
  }
);
