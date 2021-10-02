import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import AppRoutes from 'src/constants/app-routes';
import * as views from './pages';
import { PrivateRoute } from 'src/utils/HOC/PrivateRoute';
import { AuthRoutes } from 'src/utils/HOC/AuthRoutes';
import { useEffect } from 'react';
import { autoLogin } from 'src/redux/features/auth/authSlice';
import { PublicRoute } from 'src/utils/HOC/PublicRoute';
import 'src/App.css';
import { ErrorPage } from 'src/pages/ErrorPage';

function App() {
  const { role: MyRole, loading } = useAppSelector(
    (state) => state.authReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  if (loading) {
    return <h1>...loading</h1>;
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
  );
}

export default App;
