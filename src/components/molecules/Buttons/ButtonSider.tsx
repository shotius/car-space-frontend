import { ButtonProps } from '@chakra-ui/button';
import { TextButton } from './TextButton';

interface ButtonSiderProps {
  active?: boolean
  activeBg?: ButtonProps['bg']
  activeColor?: ButtonProps['color']
  inactiveBg?: ButtonProps['bg']
  inactiveColor?: ButtonProps['color']
}

export const ButtonSider: React.FC<ButtonSiderProps & ButtonProps> = ({
  pl="16px",
  p="10px",
  activeBg="autoBlue.400",
  activeColor="#fff",
  inactiveBg="transparent", 
  inactiveColor="#000", 
  active, 
  children,
  ...rest
}) => {
  return (
    <TextButton
      display="flex"
      justifyContent="start"
      pl={pl}
      p={p}
      bg={active ? activeBg : inactiveBg}
      color={active ? activeColor : inactiveColor}
      w="full"
      borderRadius="none"
      {...rest}
    >
      {children}
    </TextButton>
  );
};
