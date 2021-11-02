import { ButtonProps } from "@chakra-ui/button";
import { IconProps } from "@chakra-ui/icon";
import { FiHeart } from "react-icons/fi";
import { IconWithButton } from "../IconWithButton";

interface ButtonHeartProps {
  boxSize?: IconProps['boxSize'] 
}

export const ButtonHeart: React.FC<ButtonHeartProps & ButtonProps> = ({boxSize = 6, ...rest}) => {
  return (
    <IconWithButton
      icon={FiHeart}
      boxSize={boxSize}
      bg="autoGrey.600"
      p="0"
      h="40px"
      
      _hover={{
        bg: '#FB560729',
        fill: 'red'
      }}
      {...rest}
    />
  );
};
