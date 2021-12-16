import { Button } from '@chakra-ui/react';
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

  return (
    <ContainerOuter>
      <Button onClick={() => dispatch(logoutUser())}>logout</Button>
      <Link to={`${path}/add-car`}>add new car</Link>
      <Link to={`${path}/add-review`}>add new car</Link>
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
