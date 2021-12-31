import { VStack } from '@chakra-ui/layout';
import { Center, Spinner } from '@chakra-ui/react';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { useAppSelector } from 'src/redux/app/hook';
import { UserFavouritesCardDesktop } from '../../UserAccountPage/Cards/FavouritesCardDesktop';

interface UserFavouritesDesktopProps {}

export const UserFavouritesDesktop: React.FC<UserFavouritesDesktopProps> =
  ({}) => {
    const { favouriteCars } = useAppSelector((state) => state.userInfoSlice);
    const { favouriteCarsFetching } = useAppSelector(
      (state) => state.userInfoSlice
    );

    return (
      <Card w="full" p="32px">
        <VStack w="full" spacing="4">
          {favouriteCarsFetching ? (
            <Center w="full" h="300px">
              <Spinner />
            </Center>
          ) : !favouriteCars.length ? (
            <HeadingSecondary>
              Your Favourites list is empty
            </HeadingSecondary>
          ) : (
            favouriteCars.map((car) => (
              <UserFavouritesCardDesktop key={car.id} car={car} />
            ))
          )}
        </VStack>
      </Card>
    );
  };
