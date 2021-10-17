import { Route, RouteProps } from 'react-router-dom';
interface PublicRouteProps {
  component: React.FC;
}

export const PublicRoute: React.FC<PublicRouteProps & RouteProps> = ({
  component: Component,
  exact = true,
  ...rest
}) => <Route exact {...rest} render={() => <Component />} />;
