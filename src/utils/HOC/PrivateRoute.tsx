import { Suspense } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/ErrorBoundary';
import { useAppSelector } from 'src/redux/app/hook';

interface PrivateRouteProps {
  component: React.FC;
}

export const PrivateRoute: React.FC<PrivateRouteProps & RouteProps> = ({
  component: Component,
  exact = true,
  ...rest
}) => {
  const { isAuthenticated } = useAppSelector((state) => state.authReducer);

  if (!isAuthenticated) {
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
