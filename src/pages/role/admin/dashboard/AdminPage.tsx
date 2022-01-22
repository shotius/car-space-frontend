import { Button, Stack } from '@chakra-ui/react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { DividerVertical } from 'src/components/atoms/Divider';
import { ScrollToTop } from 'src/components/molecules/ScrollToTop';
import { useAppDispatch } from 'src/redux/app/hook';
import { logoutUser } from 'src/redux/features/auth/authSlice';
import AddBanners from './AddBanners';
import AddNewCar from './AddNewCar';
import { AddNewReview } from './AddNewReview';
import { AddOrderedCar } from './AddOrderedCar';

interface AdminProps {}

export const AdminPage: React.FC<AdminProps> = () => {
  const { path } = useRouteMatch();
  const dispatch = useAppDispatch();

  return (
    <ContainerOuter>
      <ScrollToTop />
      <Stack
        w="full"
        justify="center"
        pt="4"
        direction={['column', null, 'row']}
        align="center"
      >
        <Button variant="link">
          <Link to={`${path}/add-car`} style={{ color: 'black' }}>
            Car
          </Link>
        </Button>
        <DividerVertical height="20px" borderColor="black" display={['none', null, 'block']}/>
        <Button variant="link">
          <Link style={{ color: 'black' }} to={`${path}/add-review`}>
            Review
          </Link>
        </Button>
        <DividerVertical height="20px" borderColor="black" display={['none', null, 'block']}/>
        <Button variant="link">
          <Link style={{ color: 'black' }} to={`${path}/add-order`}>
            Ordereds
          </Link>
        </Button>
        <DividerVertical height="20px" borderColor="black" display={['none', null, 'block']}/>
        <Button variant="link">
          <Link style={{ color: 'black' }} to={`${path}/banners`}>
            Banners
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
        <Route
          path={`${path}/banners`}
          render={() => <AddBanners />}
          exact
        />
      </Switch>
    </ContainerOuter>
  );
};

export default AdminPage;
