import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
// import SignIn from "views/auth/SignIn";
// import Register from "views/auth/Register";
const App = () => {
  return (
    <Routes>
      {/* <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} /> */}
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
