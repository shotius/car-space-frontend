import { Button, ButtonProps } from '@chakra-ui/button';

interface ButtonRoundProps {
  active?: boolean;
}

export const ButtonRound: React.FC<ButtonRoundProps & ButtonProps> = ({
  active = false,
  minW="30px",
  w="30px",
  h="30px",
  children,
  ...rest
}) => {
  return (
    <Button
      fontWeight="light"
      minW={minW}
      w={w}
      h={h}
      borderRadius="100px"
      bg={active ? 'autoOrange.500' : 'transparent'}
      color={active ? '#fff' : '#000'}
      _hover={{
        bg: active ? 'autoOrange.500' : 'transparent'
      }}
      _active={{
        bg: 'autoOrange.300'
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
