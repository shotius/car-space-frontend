import { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/Errors/ErrorBoundary';

interface PublicRouteProps {
  component: React.FC;
}

export const PublicRoute: React.FC<PublicRouteProps & RouteProps> = ({
  component: Component,
  exact = true,
  ...rest
}) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<h1 style={{ background: 'red' }}>Loading...</h1>}>
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
