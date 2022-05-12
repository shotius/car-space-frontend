import { Button, ButtonProps } from '@chakra-ui/react';

interface ButtonGreenProps {}

export const ButtonGreen: React.FC<ButtonGreenProps & ButtonProps> = ({
  children,
  disabled,
  ...rest
}) => {
  return (
    <Button
      bg={disabled ? 'autoGreen.100' : 'autoGreen.400'}
      _hover={{
        bg: 'autoGreen.300',
      }}
      _active={{
        bg: 'autoGreen.200',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
