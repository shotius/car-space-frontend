import { ButtonProps } from "@chakra-ui/button";
import { IconProps } from "@chakra-ui/icon";
import { FiHeart } from "react-icons/fi";
import { ButtonWithIcon } from "./IconWithButton";

interface ButtonHeartProps {
  boxSize?: IconProps['boxSize'] 
}

export const ButtonHeart: React.FC<ButtonHeartProps & ButtonProps> = ({boxSize = 6, ...rest}) => {
  return (
    <ButtonWithIcon
      icon={FiHeart}
      boxSize={boxSize}
      bg="autoGrey.600"
      _hover={{
        bg: '#FB560729',
      }}
      {...rest}
    />
  );
};
