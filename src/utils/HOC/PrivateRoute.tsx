import { Suspense, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/Errors/ErrorBoundary';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { useAppSelector } from 'src/redux/app/hook';
import { Roles } from '../../../../server/shared_with_front/contants';

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
  const gettingUserInfo = useAppSelector((state) => state.authReducer.loading);
  const isAuthenticated = useAppSelector(
    (state) => state.userInfoSlice.isAuthenticated
  );
  const { role: userRole } = useAppSelector((state) => state.userInfoSlice);

  const [shouldGoHome, setShouldGoHome] = useState(false);
  const [shouldOpenProfile, setShouldOpenProfile] = useState(false);

  const USER = localStorage.getItem('USER_ROLE');

  useEffect(() => {
    if (userRole) {
      // if not authenticated redirect to home page
      !isAuthenticated && setShouldGoHome(true);
      // if private route role and USER role don't match redirect
      USER !== userRole && setShouldOpenProfile(true);
    }
  }, [isAuthenticated, userRole]);

  if (gettingUserInfo) {
    return (
      <HeadingSecondary textAlign="center" pt="100px">
        Loading Profile...
      </HeadingSecondary>
    );
  }

  // user is not in localstorage redirect to home
  if (!USER || USER !== role) {
    return <Redirect to="/" />
  }

  if(shouldGoHome) {
    return <Redirect to="/" />
  }
  if (shouldOpenProfile) {
    return <Redirect to={`/${userRole}/dashboard`} />
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading Private page</h1>}>
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
