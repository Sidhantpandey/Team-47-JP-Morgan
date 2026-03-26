import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return (
    <div className="min-h-screen">
      {showNavbar ? <Navbar /> : null}
      <Outlet />
    </div>
  );
}

