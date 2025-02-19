import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminProtectedRoute = () => {
  const { token, isAuthorized, isAdmin } = useSelector((state) => state.auth); // Get auth state from Redux
  console.log("is admin", isAdmin);
  return token && isAuthorized && isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminProtectedRoute;
