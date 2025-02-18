import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { token, isAuthorized } = useSelector((state) => state.auth); // Get auth state from Redux

  return token && isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/sign-in" replace />
  );
};

export default ProtectedRoute;
