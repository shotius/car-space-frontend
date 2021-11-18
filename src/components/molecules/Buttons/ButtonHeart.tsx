import { ButtonProps } from '@chakra-ui/button';
import { IconProps } from '@chakra-ui/icon';
import { useEffect, useState } from 'react';
import { HeartFilled } from 'src/components/atoms/Icons/HeartFilledIcon';
import { HeartIcon } from 'src/components/atoms/Icons/HeatIcon';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { likeCarThunk } from 'src/redux/features/auth/userSlice';
import {
  toggleLogin,
  toggleMobileAuthorization
} from 'src/redux/features/global/gloabalSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ButtonWithIcon } from './IconWithButton';

interface ButtonHeartProps {
  boxSize?: IconProps['boxSize'];
  buttonInactiveColor?: string;
  lotNumber: string;
}

export const ButtonHeart: React.FC<ButtonHeartProps & ButtonProps> = ({
  boxSize = 6,
  lotNumber, 
  buttonInactiveColor = "autoGrey.500", 
  ...rest
}) => {
  const [liked, setLiked] = useState(false)
  const dispatch = useAppDispatch();
  const { username, favourites } = useAppSelector((state) => state.userInfoSlice);
  const { isDesktop } = useDetectScreen();

  useEffect(() => {
    if(favourites?.length && favourites.includes(lotNumber)) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }, [favourites])

  return (
    <ButtonWithIcon
      icon={liked ? HeartFilled : HeartIcon}
      boxSize={boxSize}
      bg={liked ? '#FB560729' : buttonInactiveColor}
      onClick={(event) => {
        if (event.stopPropagation) event.stopPropagation();
        if (username) {
          dispatch(likeCarThunk(lotNumber))
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
