import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "redux/app/hook";

interface PrivateRouteProps {
  component: React.FC;
  [x: string]: any;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { component: Component, ...rest } = props;
  const { loginSuccess } = useAppSelector((state) => state.authReducer);

  return (
    <Route {...rest}>
      {loginSuccess ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};
