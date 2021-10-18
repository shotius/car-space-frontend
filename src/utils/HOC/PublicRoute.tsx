import { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
interface PublicRouteProps {
  component: React.FC;
}

export const PublicRoute: React.FC<PublicRouteProps & RouteProps> = ({
  component: Component,
  exact = true,
  ...rest
}) => <Suspense fallback={<h1>Loading...</h1>}>
  <Route exact {...rest} render={() => <Component />} />;
</Suspense>

