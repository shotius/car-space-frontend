import { ButtonProps } from '@chakra-ui/button';
import { IconProps } from '@chakra-ui/icon';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HeartFilled } from 'src/components/atoms/Icons/HeartFilledIcon';
import { HeartIcon } from 'src/components/atoms/Icons/HeatIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { likeCarThunk } from 'src/redux/features/auth/userSlice';
import { openLoginModal, toggleAuthModal } from 'src/redux/features/global/gloabalSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ButtonWithIcon } from './IconWithButton';

interface ButtonHeartProps {
  boxSize?: IconProps['boxSize'];
  buttonInactiveColor?: string;
  carId: string;
}

export const ButtonHeart: React.FC<ButtonHeartProps & ButtonProps> = ({
  boxSize = 6,
  carId,
  buttonInactiveColor = 'autoGrey.500',
  ...rest
}) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useAppDispatch();
  const { fullName, favouriteCarIds, likingCar } = useAppSelector(
    (state) => state.userInfoSlice
  );
  const { isDesktop } = useDetectScreen();
  const toast = useToast();

  useEffect(() => {
    if (favouriteCarIds?.length && favouriteCarIds.includes(carId)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [favouriteCarIds]);

  return (
    <ButtonWithIcon
      icon={liked ? HeartFilled : HeartIcon}
      boxSize={boxSize}
      bg={liked ? '#FB560729' : buttonInactiveColor}
      disabled={likingCar}
      onClick={(event) => {
        if (event.stopPropagation) event.stopPropagation();
        if (fullName) {
          dispatch(likeCarThunk(carId))
            .unwrap()
            .catch((error) =>
              toast({
                title: error,
                position: 'top',
                duration: 2000,
                status: 'error',
              })
            );
        } else {
          isDesktop
            ? dispatch(openLoginModal())
            : dispatch(toggleAuthModal());
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
