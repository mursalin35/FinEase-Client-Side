import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  //   location path
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner/>
  }

  // if-> user tech return children
  if (user && user?.email) {
    return children;
  }
  // navegate login
  return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
};

export default PrivetRoute;
