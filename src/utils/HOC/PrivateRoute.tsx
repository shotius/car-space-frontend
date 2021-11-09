import { Suspense } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
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
  const { isAuthenticated, role: userRole } = useAppSelector(
    (state) => state.authReducer
  );
  const USER = localStorage.getItem('USER_ROLE');

  if (!USER) {
    // if client not authenticated or his/her role not in complement to the redux state -> redirect
    if (!isAuthenticated) {
      // if not authenticated redirect to home page
      return <Redirect to="/home" />;
    } else if (role != userRole) {
      // if role does't comply with account
      return <Redirect to={`/${userRole}/dashboard`} />;
    }
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading Private page</h1>}>
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
