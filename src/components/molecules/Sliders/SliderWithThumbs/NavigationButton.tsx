import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

interface NavigationButtonProps {
  role: 'prev' | 'next';
}

export const NavigationButton = forwardRef<
  HTMLButtonElement,
  NavigationButtonProps & IconButtonProps
>(({ role, ...rest }, ref) => {
  return (
    <IconButton
      position="absolute"
      left={role === 'prev' ? '0' : 'none'}
      right={role === 'next' ? '0' : 'none'}
      top="0"
      h="100vh"
      w="10%"
      bg="transparent"
      zIndex="10"
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent', opacity: '0.1' }}
      icon={
        <DropdownIcon
          boxSize={10}
          transform={role === 'prev' ? 'rotate(90deg)' : 'rotate(-90deg)'}
          fill="autoGrey.200"
        />
      }
      ref={ref}
      {...rest}
    />
  );
});
