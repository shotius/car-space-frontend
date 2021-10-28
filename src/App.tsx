import { lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import 'src/App.css';
import { StyledApp } from 'src/components/organizms/StyledApp';
import { ErrorPage } from 'src/pages/ErrorPage';
import { useAppDispatch } from 'src/redux/app/hook';
import { autoLogin } from 'src/redux/features/auth/authSlice';
import { AuthRoute } from 'src/utils/HOC/AuthRoutes';
import { PrivateRoute } from 'src/utils/HOC/PrivateRoute';
import { PublicRoute } from 'src/utils/HOC/PublicRoute';
const  CarDetailPage = lazy(() => import('./pages/CarDetailPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const DealerDashboard = lazy(() => import('./pages/DealerDashboard'));
const Home = lazy(() => import('./pages/HomePage'));
const Login = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(autoLogin());
    localStorage.setItem('windowHeight', String(window.innerHeight));
  }, [dispatch]);

  // if (loading) {
  //   return (
  // <Center w="full" bg="white" h="100vh">
  //   <VStack spacing="0">
  //     <Icon as={LogoIcon} boxSize={['150px', null, null, '200px']} />
  //     <Spinner h="30px" w="30px" thickness="1px" />
  //   </VStack>
  // </Center>
  //   );
  // }

  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <PublicRoute path="/blog" component={BlogPage} />
          <PublicRoute path="/home" component={Home} />
          <PublicRoute path="/catalog" component={CatalogPage} />
          <PublicRoute path="/services" component={ServicesPage} />
          <PublicRoute path="/car/:lotNumber" component={CarDetailPage} exact/>
          <PrivateRoute
            path="/admin/dashboard"
            component={AdminPage}
            role="admin"
          />
          <PrivateRoute
            path="/dealer/dashboard"
            role="dealer"
            component={DealerDashboard}
          />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={RegisterPage} />
          <Route path="*" render={() => <ErrorPage />} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
