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
      borderColor="#565656"
      borderWidth="1px"
      borderRadius="8px"
      w="100px"
      transition="all 0.5s"
      _hover={{
        bg: 'autoGrey.200',
        border: 'white',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
