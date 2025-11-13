import React, { ReactNode } from "react";
import { useAuth } from "Home/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../types/ProtectedRouteTypes";

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <h2>Access denied</h2>;
  }

  return children;
};

export default ProtectedRoute;
