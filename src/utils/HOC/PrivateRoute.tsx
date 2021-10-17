import { Redirect, Route, RouteProps } from 'react-router-dom';
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

  return <Route exact {...rest} render={() => <Component />} />;
};
