import { Button, ButtonProps } from '@chakra-ui/button';

interface SelectOptionButtonProps {}

export const SelectOptionButton: React.FC<
  SelectOptionButtonProps & ButtonProps
> = ({ children, ...rest }) => {
  return (
    <Button
      p="4"
      w="full"
      whiteSpace="normal"
      borderRadius="none"
      textAlign="start"
      display="flex"
      justifyContent="flex-start"
      fontWeight="400"
      variant="ghost"
      _hover={{
        bg: 'autoGrey.100',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
