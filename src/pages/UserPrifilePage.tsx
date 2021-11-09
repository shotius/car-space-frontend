import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { UserCard } from 'src/components/organizms/UserAccountPage/Cards/UserCard';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';

interface UserDashpboardPageProps {}

export const UserDashpboardPage: React.FC<UserDashpboardPageProps> = () => {
  const { path } = useRouteMatch();

  return (
    <PublicLayout>
      <ContainerOuter pt="4">
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
            render={() => <h1>Order List</h1>}
          />
          <Route
            exact
            path={`${path}/favourites`}
            render={() => <h1>Favourites</h1>}
          />
        </Switch>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default UserDashpboardPage;
