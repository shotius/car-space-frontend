import { IconButton, IconButtonProps } from '@chakra-ui/button';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { forwardRef } from 'react';

interface SwiperButtonsProps {
  isVisible: boolean;
  side?: 'right' | 'left';
}

export const ButtonNext = forwardRef<
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
        bottom="0"
        top="0"
        left={side === 'left' ? '0' : 'null'}
        zIndex={zIndex}
        ref={ref}
        icon={
          <DropdownIcon
            fill="white"
            boxSize="5"
            ml="4px"
            mt={side === 'right' ? '-15px' : '0px'}
            mb={side === 'left' ? '15px' : '0px'}
          />
        }
        borderRadius="none"
        transform={side === 'right' ? 'rotate(-90deg)' : 'rotate(90deg)'}
        bg="black"
        w="full"
        mr={side === 'right' ? '-25px' : '0px'}
        ml={side === 'left' ? '-25px' : '0px'}
        borderTopRadius='100px'
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
