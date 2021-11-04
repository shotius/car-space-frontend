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

  // if client not authenticated or his/her role not in complement to the redux state -> redirect
  if (!isAuthenticated || role != userRole) {
    return <Redirect to="/login" />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading Private page</h1>}>
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
