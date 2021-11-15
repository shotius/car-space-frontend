import { Button, ButtonProps } from '@chakra-ui/button';
import { Center, Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

interface SwiperButtonsProps {
  isVisible: boolean;
}

export const ButtonNext = forwardRef<
  HTMLButtonElement,
  SwiperButtonsProps & ButtonProps
>(
  (
    { isVisible, zIndex = '22', ...rest },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Button
        position="absolute"
        display={isVisible ? 'block' : 'none'}
        top="0"
        right="-33px"
        bottom="0"
        h="full"
        bg="transparent"
        pl="30px"
        _hover={{
          bg: 'transparent',
        }}
        _active={{
          bg: 'transparent',
          opacity: '0.6',
        }}
        zIndex={zIndex}
        ref={ref}
        {...rest}
      >
        <Center
          h="50px"
          w="40px"
          pr="15px"
          pb="3px"
          bg="rgba(0, 0, 0, .5)"
          borderLeftRadius="100px"
        >
          <Icon as={DropdownIcon} fill="white" transform="rotate(-90deg)" />
        </Center>
      </Button>
    );
  }
);
