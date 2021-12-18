import { Button, HStack } from '@chakra-ui/react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { useAppDispatch } from 'src/redux/app/hook';
import { logoutUser } from 'src/redux/features/auth/authSlice';
import AddNewCar from './AddNewCar';
import { AddNewReview } from './AddNewReview';

interface AdminProps {}

export const AdminPage: React.FC<AdminProps> = () => {
  const { path } = useRouteMatch();
  const dispatch = useAppDispatch();

  console.log(path)

  return (
    <ContainerOuter>
      <HStack w="full" justify="center" pt="4">
        <Button border="1px solid">
          <Link to={`${path}/add-car`}>add new car</Link>
        </Button>
        <Button border="1px solid">
          <Link to={`${path}/add-review`}>add new Review</Link>
        </Button>
        <Button color="red" border="1px solid" onClick={() => dispatch(logoutUser())}>
          logout
        </Button>
      </HStack>
      <Switch>
        <Route path={path} exact>
          <Redirect to={`${path}/add-review`} />
        </Route>
        <Route path={`${path}/add-car`} render={() => <AddNewCar />} exact />
        <Route
          path={`${path}/add-review`}
          render={() => <AddNewReview />}
          exact
        />
      </Switch>
    </ContainerOuter>
  );
};

export default AdminPage;
