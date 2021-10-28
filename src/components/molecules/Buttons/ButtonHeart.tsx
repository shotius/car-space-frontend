import { ButtonProps } from "@chakra-ui/button";
import { FiHeart } from "react-icons/fi";
import { IconWithButton } from "../IconWithButton";

export const ButtonHeart: React.FC<ButtonProps> = ({...rest}) => {
  return (
    <IconWithButton
      icon={FiHeart}
      boxSize={6}
      bg="autoGrey.600"
      p="0"
      h="40px"
      _hover={{
        bg: 'autoGrey.700',
      }}
      {...rest}
    />
  );
};
