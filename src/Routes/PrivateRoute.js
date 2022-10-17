import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
