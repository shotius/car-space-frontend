import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppSelector } from "redux/app/hook";

interface TestRouteProps {
  component: React.FC;
  [x: string]: any;
}

export const TestRoute: React.FC<TestRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { loginSuccess } = useAppSelector((state) => state.authReducer);

  return (
    <Route {...rest}>
      {loginSuccess ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};
