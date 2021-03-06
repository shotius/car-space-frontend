import { Center } from '@chakra-ui/react';
import { Suspense, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'src/components/molecules/Errors/ErrorBoundary';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { useAppSelector } from 'src/redux/app/hook';
import { Roles } from '../../../../server/shared_with_front/contants';

interface PrivateRouteProps {
  component: React.FC;
  role: `${Roles}`[];
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
      <Center w="full" h="100vh" bg="red">
        <HeadingSecondary color="red">
          Loading Profile...
        </HeadingSecondary>
      </Center>
    );
  }

  // user is not in localstorage redirect to home
  if (!USER || !role.includes(USER as Roles)) {
    return <Redirect to="/" />;
  }

  if (shouldGoHome) {
    return <Redirect to="/" />;
  }
  if (shouldOpenProfile) {
    return <Redirect to={`/${userRole}/dashboard`} />;
  }

  return (
    //@ts-ignore
    <ErrorBoundary>
      <Suspense
        fallback={
          <Center w="full" h="full" pt="40px">
            <HeadingSecondary>
              Loading Profile ...
            </HeadingSecondary>
          </Center>
        }
      >
        <Route exact {...rest} render={() => <Component />} />
      </Suspense>
    </ErrorBoundary>
  );
};
