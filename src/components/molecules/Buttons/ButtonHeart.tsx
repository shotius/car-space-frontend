import { ButtonProps } from '@chakra-ui/button';
import { IconProps } from '@chakra-ui/icon';
import { HeartFilled } from 'src/components/atoms/Icons/HeartFilledIcon';
import { HeartIcon } from 'src/components/atoms/Icons/HeatIcon';
import { ButtonWithIcon } from './IconWithButton';

interface ButtonHeartProps {
  boxSize?: IconProps['boxSize'];
  liked: boolean;
}

export const ButtonHeart: React.FC<ButtonHeartProps & ButtonProps> = ({
  boxSize = 6,
  liked,
  ...rest
}) => {
  return (
    <ButtonWithIcon
      icon={liked ? HeartFilled : HeartIcon}
      boxSize={boxSize}
      bg={liked ? '#FB560729' : 'autoGrey.500'}
      onClick={(event) => {
        if (event.stopPropagation) event.stopPropagation();
      }}
      _hover={{
        fill: 'red',
        bg: '#FB560729',
      }}
      {...rest}
    />
  );
};
