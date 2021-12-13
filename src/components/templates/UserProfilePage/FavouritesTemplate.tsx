import { useEffect } from 'react';
import { UserFavouritesDesktop } from 'src/components/organizms/UserProfile/Favourites/UserFavouritesDesktop';
import { UserFavouritesMobile } from 'src/components/organizms/UserProfile/Favourites/UserFavouritesMobile';
import { useAppDispatch } from 'src/redux/app/hook';
import { getAllFavouriteCarsThunk, getAllFavouriteLotNumbersThunk } from 'src/redux/features/auth/userSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';

interface FavouritesProps {}

export const FavouritesTemplate: React.FC<FavouritesProps> = ({}) => {
  const { isDesktop } = useDetectScreen();
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(getAllFavouriteCarsThunk(''));
      dispatch(getAllFavouriteLotNumbersThunk(''))
  }, []);


  return (
    <>{isDesktop ? <UserFavouritesDesktop /> : <UserFavouritesMobile />}</>
  );
};
