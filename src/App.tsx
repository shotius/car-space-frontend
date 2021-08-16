import { ThemeProvider } from "@material-ui/core";
import { DealerDashboard } from "pages/DealerDashboard";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAppSelector } from "redux/app/hook";
import theme from "theme";
import { AdminPage } from "./pages/AdminPage";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/LoginPage";
import AppRoutes from "utils/constants/app-routes";
import * as views from "./pages";
import { PrivateRoute } from "utils/HOC/PrivateRoute";
import { UnauthorizedRoute } from "utils/HOC/UnauthorizedRoute";
import { TestRoute } from "utils/HOC/TestRoute";

function App() {
  const { role: MyRole } = useAppSelector((state) => state.authReducer);

  const getAllowedRoutes = () => {
    return AppRoutes.filter(({ roles }) => {
      // if route has no roles or there is my role and this role in routes' role
      if ((roles && roles.length === 0) || (MyRole && roles.includes(MyRole))) {
        return true;
      }
      return false;
    });
  };

  const Component = views.AdminPage
  const generateRoutes = () => {
    const allowedRoutes = getAllowedRoutes();
    // console.log(allowedRoutes);
    return allowedRoutes.map((route) => {
      const { path, view, isPrivate, exact } = route;

      const component = views[view];
      if (isPrivate) {
        return (
          <PrivateRoute
            key={path}
            path={`/${path}`}
            component={component}
            exact={exact}
          />
        );
      }
      return (
        <UnauthorizedRoute
          key={path}
          path={`/${path}`}
          component={component}
          exact={exact}
        />
      );
    });
  };
  console.log(generateRoutes())
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          {/* <Route path="/home" exact>
            <Home />
          </Route> */}
          {/* <Route path="/login" exact> */}
            {/* <Component /> */}
          {/* </Route> */}
          {/* <Route path="/admin/dashboard" exact>
            <AdminPage />
          </Route>
          <Route path="/dealer/dashboard" exact>
            <DealerDashboard />
          </Route> */}
          {/* {generateRoutes()} */}
          {/* <PrivateRoute path='/login' component={Component} exact={true} /> */}
          <TestRoute component={Component} path='/login' exact={true} />
          <Route>
            error
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
