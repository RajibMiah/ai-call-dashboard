import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import DataTables from "views/admin/tables";
import Register from "views/auth/Register";

// Icon Imports
import { MdHome, MdCall, MdFaceUnlock } from "react-icons/md";

const routes = [
  {
    name: "Analytics",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Call Logs",
    layout: "/admin",
    path: "call-logs",
    icon: <MdCall className="h-6 w-6" />,
    component: <DataTables />,
  },
  {
    name: "Make Calls",
    layout: "/admin",
    path: "make-calls",
    icon: <MdCall className="h-6 w-6" />,
    component: <DataTables />,
  },
  {
    name: "Register",
    layout: "/auth",
    path: "register",
    icon: <MdFaceUnlock className="h-6 w-6" />,
    component: <Register />,
  },
];

export default routes;
