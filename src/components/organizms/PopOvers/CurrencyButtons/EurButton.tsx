import { Button, ButtonProps, HStack } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

export const ButtonEur = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fontSize = '16px', ...rest }, ref) => {
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
        {/* <Icon as={EuroIcon} boxSize={6} /> */}
        <HStack pt="1px" pl="1">
          <TextRegular fontSize="18px">€</TextRegular>
          <TextRegular fontSize={fontSize}>Eur</TextRegular>
        </HStack>
      </Button>
    );
  }
);
