import { Center, VStack } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import 'src/App.css';
import { StyledApp } from 'src/components/organizms/StyledApp';
import AppRoutes from 'src/constants/app-routes';
import { ErrorPage } from 'src/pages/ErrorPage';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { autoLogin } from 'src/redux/features/auth/authSlice';
import { AuthRoutes } from 'src/utils/HOC/AuthRoutes';
import { PrivateRoute } from 'src/utils/HOC/PrivateRoute';
import { PublicRoute } from 'src/utils/HOC/PublicRoute';
import { LogoIcon } from './components/atoms/Icons/LogoIcon';
import * as views from './pages';

function App() {
  const { role: MyRole, loading } = useAppSelector(
    (state) => state.authReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  if (loading) {
    return (
      <Center w="full" bg="white" h="100vh">
        <VStack spacing="0">
          <Icon as={LogoIcon} boxSize={['150px', null, null, '200px']} />
          <Spinner h="30px" w="30px" thickness="1px"/>
        </VStack>
      </Center>
    );
  }

  const getAllowedRoutes = () => {
    // console.log('get Allowed routes')
    return AppRoutes.filter(({ roles }) => {
      // if route has no roles or there is my role and this role in routes' roles
      if ((roles && roles.length === 0) || (MyRole && roles.includes(MyRole))) {
        return true;
      }
      return false;
    });
  };

  // generate only routes where user has permissions
  const generateRoutes = () => {
    // console.log('generating routes')
    const allowedRoutes = getAllowedRoutes();
    return allowedRoutes.map((route) => {
      const { path, view, isPrivate, exact, isAuth } = route;

      const component = views[view];
      if (isPrivate) {
        return (
          <PrivateRoute
            key={path}
            path={path}
            component={component}
            exact={exact}
          />
        );
      } else if (isAuth) {
        return (
          <AuthRoutes
            key={path}
            path={path}
            component={component}
            exact={exact}
          />
        );
      }
      return (
        <PublicRoute
          key={path}
          path={path}
          component={component}
          exact={exact}
        />
      );
    });
  };

  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          {generateRoutes()}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
