import React from "react";
import { Route } from "react-router-dom";

interface PublicRouteProps {
  component: React.FC;
  [x: string]: any;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};
