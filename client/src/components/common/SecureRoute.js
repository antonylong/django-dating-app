import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLoggedIn } from "../../api/authToken";

const SecureRoute = ({ element: Element, path, exact = false }) => {
  if (isLoggedIn()) {
    return <Route element={Element} path={path} exact={exact} />;
  }

  return <Navigate to="/login" />;
};

export default SecureRoute;
