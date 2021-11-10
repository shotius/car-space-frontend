import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { UsdIcon } from 'src/components/atoms/Icons/UsdIcon';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

export const ButtonUsd = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fontSize = '16px', ...rest }, ref) => {
    return (
      <Button
        bg="white"
        w="full"
        fontWeight="400"
        borderRadius="none"
        _hover={{
          bg: 'autoGrey.100',
        }}
        ref={ref}
        {...rest}
      >
        <Icon as={UsdIcon} boxSize={6} />
        <TextRegular fontSize={fontSize} mt="2px">Usd</TextRegular>
      </Button>
    );
  }
);
