import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/SpacECE.jpeg";
import { getStoredUser, logout } from "../utils/auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    setUser(getStoredUser());
    setLoadingUser(false);

    const onStorage = () => setUser(getStoredUser());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayName = user?.fullName || user?.email || "";

  const getDashboardPath = (role) => {
    const r = String(role || "").toLowerCase();
    if (r === "admin") return "/admin/dashboard";
    if (r === "parent") return "/dashboard/parent";
    if (r === "volunteer") return "/volunteer/dashboard";
    return "/";
  };

  const dashboardPath = getDashboardPath(user?.role);

  const handleGoDashboard = () => {
    navigate(dashboardPath);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleJoinUs = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="SpacECE Logo"
                className="h-16 w-auto"
              />
            </Link>
            <div>
              <span className="text-xl font-bold text-gray-800">SpacECE</span>
              <p className="text-sm text-gray-600">India Foundation</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#about"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="/#programs"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Programs
            </a>
            <Link
              to="/umang-fellowship"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Fellowship
            </Link>
            <a
              href="/#impact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Our Impact
            </a>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Auth actions (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {loadingUser ? (
              <div className="flex items-center justify-center w-28">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500" />
              </div>
            ) : user?.token ? (
              <>
                <span className="text-sm text-gray-600 truncate max-w-[220px]">
                  Signed in as{" "}
                  <span className="font-medium text-gray-800">
                    {displayName || "User"}
                  </span>
                  {user?.role ? (
                    <span className="text-gray-500"> ({user.role})</span>
                  ) : null}
                </span>
                <button
                  onClick={handleGoDashboard}
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition font-medium"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="text-gray-700 hover:text-orange-500 transition-colors px-4 py-2 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={handleJoinUs}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                >
                  Join Us
                </button>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 mt-4 px-4">
              <a
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="/#programs"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Programs
              </a>
              <Link
                to="/umang-fellowship"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Fellowship
              </Link>
              <a
                href="/#impact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Our Impact
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Contact
              </Link>

              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {loadingUser ? (
                  <div className="flex items-center justify-center py-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500" />
                  </div>
                ) : user?.token ? (
                  <>
                    <button
                      onClick={handleGoDashboard}
                      className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 font-medium shadow-lg"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleLogin}
                      className="text-gray-700 hover:text-orange-500 transition-colors px-4 py-2 text-left font-medium"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleJoinUs}
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 font-medium"
                    >
                      Join Us
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}




