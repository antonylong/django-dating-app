import React from "react";
import { Route, Redirect } from "react-router";
import { isLoggedIn } from "../../api/authToken";

const SecureRoute = ({ component: Component, path, exact = false }) => {
  if (isLoggedIn()) {
    return <Route component={Component} path={path} exact={exact}></Route>;
  }

  return <Redirect to="/login" />;
};

export default SecureRoute;
