import { Button, ButtonProps } from '@chakra-ui/button';

interface CurrencyButtonProps {
  active?: boolean;
}

export const CurrencyButton: React.FC<CurrencyButtonProps & ButtonProps> = ({
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
      {...rest}
    >
      {children}
    </Button>
  );
};
