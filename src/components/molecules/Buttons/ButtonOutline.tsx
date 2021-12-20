import { Button, ButtonProps } from '@chakra-ui/button';

interface ButtonOutlineProps {}

export const ButtonOutline: React.FC<ButtonOutlineProps & ButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <Button
      backgroundColor="white"
      fontWeight="light"
      border="1px solid #565656"
      borderRadius="8px"
      w="100px"
      padding="0"
      minW="0"
      transition="all 0.2s"
      _hover={{
        bg: 'autoGrey.200',
        border: '1px solid transparent',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
