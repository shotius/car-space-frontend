import { Center, VStack } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import 'src/App.css';
import { StyledApp } from 'src/components/organizms/StyledApp';
// import AppRoutes from 'src/constants/app-routes';
import { ErrorPage } from 'src/pages/ErrorPage';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { autoLogin } from 'src/redux/features/auth/authSlice';
import { AuthRoute } from 'src/utils/HOC/AuthRoutes';
import { PrivateRoute } from 'src/utils/HOC/PrivateRoute';
import { PublicRoute } from 'src/utils/HOC/PublicRoute';
import { LogoIcon } from './components/atoms/Icons/LogoIcon';
// import * as views from './pages';
import {
  AdminPage,
  BlogPage,
  CatalogPage,
  DealerDashboard,
  Home,
  Login,
  RegisterPage,
  ServicesPage,
} from './pages';

function App() {
  const { role: MyRole, loading } = useAppSelector(
    (state) => state.authReducer
  );
  
  const dispatch = useAppDispatch();
  console.log(MyRole);

  useEffect(() => {
    dispatch(autoLogin());
    localStorage.setItem('windowHeight', String(window.innerHeight));
  }, [dispatch]);

  if (loading) {
    return (
      <Center w="full" bg="white" h="100vh">
        <VStack spacing="0">
          <Icon as={LogoIcon} boxSize={['150px', null, null, '200px']} />
          <Spinner h="30px" w="30px" thickness="1px" />
        </VStack>
      </Center>
    );
  }

  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <PublicRoute path="/home" component={Home} />
          <PublicRoute path="/catalog" component={CatalogPage} />
          <PublicRoute path="/services" component={ServicesPage} />
          <PublicRoute path="/blog" component={BlogPage} />
          <PrivateRoute path="/admin/dashboard" component={AdminPage} />
          <PrivateRoute path="/dealer/dashboard" component={DealerDashboard} />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={RegisterPage} />
          <Route path="*" render={() => <ErrorPage />} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
