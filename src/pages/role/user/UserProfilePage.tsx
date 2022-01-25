import { Stack } from '@chakra-ui/react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { ScrollToTop } from 'src/components/molecules/ScrollToTop';
import { UserCard } from 'src/components/organizms/UserAccountPage/Cards/UserCard';
import { FavouritesPage } from './dashboard/FavouritesPage';
import { OrderListPage } from './dashboard/OrderListPage';

interface UserDashpboardPageProps {}

export const UserProfilePage: React.FC<UserDashpboardPageProps> = () => {
  const { path } = useRouteMatch();

  return (
    <ContainerOuter pt={['16px', '26px', '32px', '48px']}>
      <ScrollToTop />
      <Stack direction={['column', null, null, 'row']} spacing="24px" w="full">
        <UserCard />
        <Switch>
          <Route
            exact
            path={path}
            render={() => <Redirect to={`${path}/order-list`} />}
          />
          <Route
            exact
            path={`${path}/order-list`}
            render={() => <OrderListPage />}
          />
          <Route
            exact
            path={`${path}/favourites`}
            render={() => <FavouritesPage />}
          />
        </Switch>
      </Stack>
    </ContainerOuter>
  );
};

export default UserProfilePage;
