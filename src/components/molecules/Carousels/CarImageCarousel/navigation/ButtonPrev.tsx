import { Button, ButtonProps } from '@chakra-ui/button';
import { Center, Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

interface SwiperButtonsProps {
  isVisible: boolean;
}

export const ButtonPrev = forwardRef<
  HTMLButtonElement,
  SwiperButtonsProps & ButtonProps
>(
  (
    { isVisible, zIndex = '222', ...rest },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Button
        position="absolute"
        display={isVisible ? 'block' : 'none'}
        top="0"
        right="0"
        bottom="0"
        left="-35px"
        h="full"
        bg="transparent"
        _hover={{
          bg: 'transparent',
        }}
        _active={{
          bg: 'transparent',
        }}
        zIndex={zIndex}
        ref={ref}
        {...rest}
      >
        <Center
          h="50px"
          w="40px"
          pl="15px"
          bg="rgba(0, 0, 0, .5)"
          borderRightRadius="100px"
          _active={{
            opacity: '0.6',
          }}
        >
          <Icon as={DropdownIcon} fill="white" transform="rotate(90deg)" />
        </Center>
      </Button>
    );
  }
);
{
  /* <IconButton
      position="absolute"
      top="50%"
      left="10px"
      bottom="0"
      
      zIndex={zIndex}
      ref={ref}
      icon={<DropdownIcon fill="white" boxSize="5" ml="4px" mt="0" mb="15px" />}
      borderRadius="none"
      transform="rotate(90deg) translateX(-50%)"
      // w="full"
      mr="0px"
      ml="-25px"
      // borderTopRadius="100px"
      background="rgba(0, 0, 0, 0.5)"
      display={isVisible ? 'block' : 'none'}
      _hover={{
        bg: 'black',
      }}
      _active={{
        bg: 'black',
        opacity: '.9',
      }}
      {...rest}
    /> */
}
