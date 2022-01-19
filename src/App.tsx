import { lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import 'src/App.css';
import { StyledApp } from 'src/components/organizms/Wrappers/StyledApp';
import { ErrorPage } from 'src/pages/ErrorPage';
import { useAppDispatch } from 'src/redux/app/hook';
import { autoLogin } from 'src/redux/features/auth/authSlice';
import { PrivateRoute } from 'src/utils/HOC/PrivateRoute';
import { PublicRoute } from 'src/utils/HOC/PublicRoute';
import { PublicLayout } from './components/templates/Layouts/PublicLayout';
const AccountActivation = lazy(() => import('./pages/AccountActivation'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));
const CarDetailPageDealer = lazy(
  () => import('./pages/catalog/car/CarDetailPageDealer')
);
const UserProfilePage = lazy(() => import('./pages/role/user/UserProfilePage'));
const BlogPage = lazy(() => import('./pages/blogs/BlogPage'));
const CatalogPage = lazy(() => import('./pages/catalog/CatalogPage'));
const AdminPage = lazy(() => import('./pages/role/admin/dashboard/AdminPage'));
const DealerDashboard = lazy(() => import('./pages/role/dealer/DealerPage'));
const Home = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const BlogDetailPage = lazy(() => import('./pages/blogs/blog/BlogDetailPage'));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(autoLogin());
    localStorage.setItem('windowHeight', String(window.innerHeight));
  }, [dispatch]);

  return (
    <StyledApp>
      <Router>
        <PublicLayout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <PublicRoute path="/home" component={Home} />

            <PublicRoute path="/blog" component={BlogPage} exact />
            <PublicRoute
              path="/blog/:blogId"
              component={BlogDetailPage}
              exact
            />

            <PublicRoute path="/catalog" component={CatalogPage} exact />
            <PublicRoute
              path="/catalog/car/:carId"
              component={CarDetailPageDealer}
              exact
            />

            <PublicRoute path="/services" component={ServicesPage} />

            <PublicRoute
              path="/change-password/:token"
              component={ChangePassword}
            />

            <PublicRoute
              path="/account-activation/:hash"
              component={AccountActivation}
            />

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
            <PrivateRoute
              path="/user/dashboard"
              role="user"
              component={UserProfilePage}
            />
            <Route path="*" render={() => <ErrorPage />} />
          </Switch>
        </PublicLayout>
      </Router>
    </StyledApp>
  );
}

export default App;
