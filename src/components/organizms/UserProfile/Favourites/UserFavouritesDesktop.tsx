import { VStack } from '@chakra-ui/layout';
import { Card } from 'src/components/molecules/Cards/Card';
import { UserFavouritesCardDesktop } from '../../UserAccountPage/Cards/FavouritesCardDesktop';

interface UserFavouritesDesktopProps {}

export const UserFavouritesDesktop: React.FC<UserFavouritesDesktopProps> =
  ({}) => {
    return (
      <Card w="full" p="32px">
        <VStack w="full" spacing="4">
          <UserFavouritesCardDesktop />
          <UserFavouritesCardDesktop />
          <UserFavouritesCardDesktop />
          <UserFavouritesCardDesktop />
          <UserFavouritesCardDesktop />
          <UserFavouritesCardDesktop />
        </VStack>
      </Card>
    );
  };
