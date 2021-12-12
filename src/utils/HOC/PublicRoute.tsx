import { Suspense } from 'react';
import { Route, RouteProps, useLocation } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/Errors/ErrorBoundary';
import { LoadingLogo } from 'src/components/molecules/spinners/LoadingLogo';
import { PageLoadingSpinner } from 'src/components/molecules/spinners/PageLoadingSpinner';

interface PublicRouteProps {
  component: React.FC;
}

export const PublicRoute: React.FC<PublicRouteProps & RouteProps> = ({
  component: Component,
  exact = true,
  ...rest
}) => {
  const { pathname } = useLocation();
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          pathname === '/home' ? <LoadingLogo /> : <PageLoadingSpinner />
        }
      >
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
