import { Suspense } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/ErrorBoundary';
import { useAppSelector } from 'src/redux/app/hook';

interface AuthRoutesProps {
  component: React.FC;
  [x: string]: any;
}

export const AuthRoute: React.FC<AuthRoutesProps & RouteProps> = ({
  component: Component,
  exact = true,
  ...rest
}) => {
  const { isAuthenticated, role } = useAppSelector(
    (state) => state.authReducer
  );

  if (isAuthenticated) {
    return <Redirect to={`/${role}/dashboard`} />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading AuthPage...</h1>}>
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
