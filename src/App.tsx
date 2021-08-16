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
import { Admin } from "./pages/AdminPage";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/LoginPage";

function App() {
  const {role} = useAppSelector(state => state.authReducer)
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/admin/dashboard" exact>
            <Admin />
          </Route>
          <Route path="/dealer/dashboard" exact>
            <DealerDashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
