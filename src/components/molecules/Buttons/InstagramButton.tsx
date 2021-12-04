import { ButtonProps, IconButton, IconProps } from '@chakra-ui/react';
import { InstagramIcon } from 'src/components/atoms/Icons/InsagramIcon';

interface InstagramButtonProps {
  boxSize?: IconProps['boxSize'];
}

export const InstagramButton: React.FC<InstagramButtonProps & ButtonProps> = ({
  bg = '#f4f4f5',
  boxSize = 12,
  ...rest
}) => {
  return (
    <IconButton
      icon={
        <InstagramIcon
          boxSize={boxSize}
          bg={bg}
          borderRadius="100px"
          transition="all .1s"
        />
      }
      p="0"
      minW="0"
      minH="0"
      h="auto"
      bg="transparent"
      aria-label="instagram link"
      _hover={{
        bg: 'transparent',
      }}
      _active={{
        bg: 'transparent',
      }}
      {...rest}
    />
  );
};
