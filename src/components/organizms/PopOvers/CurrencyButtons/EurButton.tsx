import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { EuroIcon } from 'src/components/atoms/Icons/EuroIcon';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

export const ButtonEur = forwardRef<HTMLButtonElement, ButtonProps>(
  ({fontSize = "16px",  ...rest }, ref) => {
    return (
      <Button
        bg="white"
        w="full"
        borderRadius="none"
        fontWeight="400"
        _hover={{
          bg: 'autoGrey.100',
        }}
        ref={ref}
        {...rest}
      >
        <Icon as={EuroIcon} boxSize={6} />
        <TextRegular fontSize={fontSize} pt="3px">Eur</TextRegular>
      </Button>
    );
  }
);
