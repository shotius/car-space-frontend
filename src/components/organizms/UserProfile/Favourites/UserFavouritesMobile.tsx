import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { UserFavouritesCardMobile } from '../../UserAccountPage/Cards/FavouritesCardMobile';

interface UserProfileFavourites_MobileProps {}

export const UserFavouritesMobile: React.FC<UserProfileFavourites_MobileProps> =
  ({}) => {
    return (
      <CatalogListWrap pt="48px">
        <UserFavouritesCardMobile />
        <UserFavouritesCardMobile />
        <UserFavouritesCardMobile />
        <UserFavouritesCardMobile />
      </CatalogListWrap>
    );
  };
