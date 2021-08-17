import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "redux/app/hook";

interface AuthRoutesProps {
  component: React.FC;
  [x: string]: any;
}

export const AuthRoutes: React.FC<AuthRoutesProps> = (props) => {
  const { component: Component, ...rest } = props;
  const {isAuthenticated, role } = useAppSelector((state) => state.authReducer);

  return (
    <Route {...rest}>
      {isAuthenticated ? <Redirect to={`/${role}/dashboard`} /> : <Component />}
    </Route>
  );
};
