import React, { useEffect, useMemo, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getStoredUser } from "../utils/auth";

export default function ProtectedRoute({ requiredRole }) {
  const location = useLocation();
  const user = getStoredUser();

  const shouldRedirect = useMemo(() => {
    if (!user?.token) return true;
    if (requiredRole && user?.role !== requiredRole) return true;
    return false;
  }, [requiredRole, user?.role, user?.token]);

  const [showLoader, setShowLoader] = useState(shouldRedirect);

  useEffect(() => {
    if (!shouldRedirect) return;
    const t = setTimeout(() => setShowLoader(false), 400);
    return () => clearTimeout(t);
  }, [shouldRedirect]);

  if (showLoader) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!user?.token) return <Navigate to="/login" replace state={{ from: location.pathname }} />;

  if (requiredRole && user?.role !== requiredRole) {
    const redirect =
      user?.role === "admin"
        ? "/admin/dashboard"
        : user?.role === "parent"
          ? "/dashboard/parent"
          : user?.role === "volunteer"
            ? "/volunteer/dashboard"
          : "/login";
    return <Navigate to={redirect} replace />;
  }

  return <Outlet />;
}

