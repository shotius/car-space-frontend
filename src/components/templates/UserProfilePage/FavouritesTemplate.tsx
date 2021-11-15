import { UserFavouritesDesktop } from 'src/components/organizms/UserProfile/Favourites/UserFavouritesDesktop';
import { UserFavouritesMobile } from 'src/components/organizms/UserProfile/Favourites/UserFavouritesMobile';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';

interface FavouritesProps {}

export const FavouritesTemplate: React.FC<FavouritesProps> = ({}) => {
  const { isDesktop } = useDetectScreen();

  return (
    <>{isDesktop ? <UserFavouritesDesktop /> : <UserFavouritesMobile />}</>
  );
};
