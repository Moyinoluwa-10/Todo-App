import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const username = sessionStorage.getItem("user");
  return username ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
