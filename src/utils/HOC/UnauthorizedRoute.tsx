import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "redux/app/hook";

interface UnauthorizedRouteProps {
  component: React.FC;
  [x: string]: any;
}

export const UnauthorizedRoute: React.FC<UnauthorizedRouteProps> = (props) => {
  const { component: Component, ...rest } = props;
  const { loginSuccess, role } = useAppSelector((state) => state.authReducer);

  return (
    <Route {...rest}>
      {loginSuccess ? <Redirect to={`/${role}/dashboard`} /> : <Component />}
    </Route>
  );
};
