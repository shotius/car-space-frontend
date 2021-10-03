import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import 'App.css';
import { StyledApp } from 'components/organizms/StyledApp';
import AppRoutes from 'constants/app-routes';
import { ErrorPage } from 'pages/ErrorPage';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/app/hook';
import { autoLogin } from 'redux/features/auth/authSlice';
import { AuthRoutes } from 'utils/HOC/AuthRoutes';
import { PrivateRoute } from 'utils/HOC/PrivateRoute';
import { PublicRoute } from 'utils/HOC/PublicRoute';
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
      <Center>
        <Spinner />
      </Center>
    );
  }

  const getAllowedRoutes = () => {
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
