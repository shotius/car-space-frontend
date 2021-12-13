import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { useAppSelector } from 'src/redux/app/hook';
import { UserFavouritesCardMobile } from '../../UserAccountPage/Cards/FavouritesCardMobile';

interface UserProfileFavourites_MobileProps {}

export const UserFavouritesMobile: React.FC<UserProfileFavourites_MobileProps> =
  ({}) => {
    const { favouriteCars } = useAppSelector((state) => state.userInfoSlice);

    return (
      <CatalogListWrap pt="48px">
        {favouriteCars.map((car) => (
          <UserFavouritesCardMobile key={car.id} car={car} />
        ))}
      </CatalogListWrap>
    );
  };
