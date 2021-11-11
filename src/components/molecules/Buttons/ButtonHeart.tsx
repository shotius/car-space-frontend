import { ButtonProps } from "@chakra-ui/button";
import { IconProps } from "@chakra-ui/icon";
import { HeartIcon } from "src/components/atoms/Icons/HeatIcon";
import { ButtonWithIcon } from "./IconWithButton";

interface ButtonHeartProps {
  boxSize?: IconProps['boxSize'] 
}

export const ButtonHeart: React.FC<ButtonHeartProps & ButtonProps> = ({boxSize = 6, ...rest}) => {
  return (
    <ButtonWithIcon
      icon={HeartIcon}
      boxSize={boxSize}
      bg="autoGrey.500"
      _hover={{
        fill: 'red', 
        bg: '#FB560729',
      }}
      {...rest}
    />
  );
};
