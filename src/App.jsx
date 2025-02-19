import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import ProtectedRoute from "components/ProtectedRoute";
import AdminProtectedRoute from "components/ProtectedRoute/admin";
import SignIn from "./views/auth/SignIn";
import Register from "./views/auth/Register";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="auth/sign-in" element={<SignIn />} />

      {/* Protected Routes - Accessible only to authenticated users */}
      <Route element={<ProtectedRoute />}>
        <Route path="admin/*" element={<AdminLayout />} />

        {/* Admin Protected Route - Only admins can access register */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="auth/register" element={<Register />} />
        </Route>
      </Route>

      {/* Redirect to "/admin" for logged-in users */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
