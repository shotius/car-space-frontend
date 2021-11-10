import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { GelIcon } from 'src/components/atoms/Icons/GelIcon';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

export const ButtonGel = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fontSize="16px", ...rest }, ref) => {
    return (
      <Button
        w="full"
        borderRadius="none"
        bg="white"
        fontWeight="400"
        _hover={{
          bg: 'autoGrey.100',
        }}
        ref={ref}
        {...rest}
      >
        <Icon as={GelIcon} boxSize={6} />
        <TextRegular fontSize={fontSize} pt="3px">Gel</TextRegular>
      </Button>
    );
  }
);
