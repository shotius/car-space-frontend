import { ButtonProps } from '@chakra-ui/button';
import { IconProps } from '@chakra-ui/icon';
import { useContext } from 'react';
import { HeartFilled } from 'src/components/atoms/Icons/HeartFilledIcon';
import { HeartIcon } from 'src/components/atoms/Icons/HeatIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { likeCarThunk } from 'src/redux/features/auth/userSlice';
import {
  toggleLogin,
  toggleMobileAuthorization,
} from 'src/redux/features/global/gloabalSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';
import { CarContext } from '../Cards/CarCard';
import { ButtonWithIcon } from './IconWithButton';

interface ButtonHeartProps {
  boxSize?: IconProps['boxSize'];
  liked?: boolean;
}

export const ButtonHeart: React.FC<ButtonHeartProps & ButtonProps> = ({
  boxSize = 6,
  ...rest
}) => {
  const dispatch = useAppDispatch();
  const { username, favourites } = useAppSelector((state) => state.userInfoSlice);
  const { isDesktop } = useDetectScreen();
  const car = useContext(CarContext) as ICar

  if (!car) {
    return <></>
  }
  const liked = favourites?.includes(car.lN)

  return (
    <ButtonWithIcon
      icon={liked ? HeartFilled : HeartIcon}
      boxSize={boxSize}
      bg={liked ? '#FB560729' : 'autoGrey.500'}
      onClick={(event) => {
        if (event.stopPropagation) event.stopPropagation();
        if (username) {
          dispatch(likeCarThunk(car.lN))
        } else {
          isDesktop
            ? dispatch(toggleLogin())
            : dispatch(toggleMobileAuthorization());
        }
      }}
      _hover={{
        fill: 'red',
        bg: '#FB560729',
      }}
      {...rest}
    />
  );
};
