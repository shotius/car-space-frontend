import { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/ErrorBoundary';

interface PublicRouteProps {
  component: React.FC;
}

export const PublicRoute: React.FC<PublicRouteProps & RouteProps> = ({
  component: Component,
  exact = true,
  ...rest
}) => (
  <ErrorBoundary>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Route exact {...rest} render={() => <Component />} />
    </Suspense>
  </ErrorBoundary>
);
