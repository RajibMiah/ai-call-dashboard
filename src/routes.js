import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";
import Register from "views/auth/Register";

// Icon Imports
import {
  MdHome,
  MdAnalytics,
  MdCall,
  MdPerson,
  MdFaceUnlock,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Analytics",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdAnalytics className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Make calls",
    layout: "/admin",
    icon: <MdCall className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Register",
    layout: "/auth",
    path: "register",
    icon: <MdFaceUnlock className="h-6 w-6" />,
    component: <Register />,
  },
  {
    name: "SignIn",
    layout: "/auth",
    path: "sign-in",
    icon: <MdFaceUnlock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
