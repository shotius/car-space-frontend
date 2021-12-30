import { Button, Divider, HStack, Stack } from '@chakra-ui/react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { DividerVertical } from 'src/components/atoms/Divider';
import { useAppDispatch } from 'src/redux/app/hook';
import { logoutUser } from 'src/redux/features/auth/authSlice';
import AddNewCar from './AddNewCar';
import { AddNewReview } from './AddNewReview';
import { AddOrderedCar } from './AddOrderedCar';

interface AdminProps {}

export const AdminPage: React.FC<AdminProps> = () => {
  const { path } = useRouteMatch();
  const dispatch = useAppDispatch();

  return (
    <ContainerOuter>
      <Stack
        w="full"
        justify="center"
        pt="4"
        direction={['column', null, 'row']}
        align="center"
      >
        <Button variant="link">
          <Link to={`${path}/add-car`} style={{ color: 'black' }}>
            add new car
          </Link>
        </Button>
        <DividerVertical height="20px" borderColor="black" display={['none', null, 'block']}/>
        <Button variant="link">
          <Link style={{ color: 'black' }} to={`${path}/add-review`}>
            add new Review
          </Link>
        </Button>
        <DividerVertical height="20px" borderColor="black" display={['none', null, 'block']}/>
        <Button variant="link">
          <Link style={{ color: 'black' }} to={`${path}/add-order`}>
            Add/change Ordered Car
          </Link>
        </Button>
        <DividerVertical height="20px" borderColor="black" display={['none', null, 'block']}/>
        <Button
          color="red"
          border="1px solid"
          onClick={() => dispatch(logoutUser())}
        >
          logout
        </Button>
      </Stack>
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
        <Route
          path={`${path}/add-order`}
          render={() => <AddOrderedCar />}
          exact
        />
      </Switch>
    </ContainerOuter>
  );
};

export default AdminPage;
