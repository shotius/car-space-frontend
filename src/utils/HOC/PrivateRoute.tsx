import { Suspense, useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/Errors/ErrorBoundary';
import { Roles } from 'src/constants';
import { useAppSelector } from 'src/redux/app/hook';

interface PrivateRouteProps {
  component: React.FC;
  role: `${Roles}`;
}

export const PrivateRoute: React.FC<PrivateRouteProps & RouteProps> = ({
  component: Component,
  exact = true,
  role,
  ...rest
}) => {
  const { loading: gettingUserInfo } = useAppSelector(
    (state) => state.authReducer
  );
  const { isAuthenticated, role: userRole } = useAppSelector(
    (state) => state.UserInfoSlice
  );
  const USER = localStorage.getItem('USER_ROLE');
  const history = useHistory();

  useEffect(() => {
    if (userRole) {
      // if not authenticated redirect to home page
      if (!isAuthenticated) {
        history.push('/home');
      }
      // if private route role and USER role don't match redirect
      if (USER !== userRole) {
        history.push(`/${userRole}/dashboard`);
      }
    }
  }, [isAuthenticated, userRole]);

  if (gettingUserInfo) {
    return <h1>Loading Private page</h1>;
  }
  // user is not in localstorage redirect to home
  if (!USER || USER !== role) {
    history.push('/home');
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading Private page</h1>}>
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
