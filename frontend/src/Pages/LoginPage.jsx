import { useState, useEffect } from "react";
import {
  Heart,
  Star,
  ChevronLeft,
  User,
  Lock,
  Mail,
  UserPlus,
  LogIn,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";  

export default function LoginPage() {
  const location = useLocation();
  const [selectedRole, setSelectedRole] = useState(location.state?.role || "");
  const [isRegister, setIsRegister] = useState(
    location.state?.isRegister || false
  );

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Update state when location state changes
    if (location.state?.role) {
      setSelectedRole(location.state.role);
    }
    if (location.state?.isRegister !== undefined) {
      setIsRegister(location.state.isRegister);
    }
  }, [location.state]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsRegister(false); // default to login form
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (isRegister && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const { data } = isRegister
        ? await axios.post("http://localhost:3000/api/auth/register", {
            fullName: fullname,
            email,
            password,
            role: selectedRole,
          })
        : await axios.post("http://localhost:3000/api/auth/login", {
            email,
            password,
            role: selectedRole,
          });

      console.log("Auth success:", data);
      localStorage.setItem("user", JSON.stringify(data));

      if (selectedRole === "admin") {
        window.location.href = "/admin/dashboard";
      } else if (selectedRole === "parent") {
        window.location.href = "/dashboard/parent";
      } else {
        window.location.href = "/volunteer/dashboard";
      }
    } catch (err) {
      console.error("Auth failed", err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navbar />

      <main className="container mx-auto px-4 py-24 flex flex-col items-center justify-center">
        {!selectedRole ? (
          <div className="text-center">
            <div className="mb-8">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to SpacECE
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose your role to continue your journey with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <RoleCard
                title="Volunteer"
                description="Join us in making a difference"
                color="orange"
                onClick={() => handleRoleSelect("volunteer")}
              />
              <RoleCard
                title="Parent"
                description="Track your child's development"
                color="yellow"
                onClick={() => handleRoleSelect("parent")}
              />
              <RoleCard
                title="Admin"
                description="Manage and oversee operations"
                color="red"
                onClick={() => handleRoleSelect("admin")}
              />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <button
              onClick={() => {
                setSelectedRole("");
                setIsRegister(false);
              }}
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8 group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to role selection</span>
            </button>

            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full p-3 mb-4">
                  {isRegister ? (
                    <UserPlus className="h-6 w-6 text-orange-500" />
                  ) : (
                    <LogIn className="h-6 w-6 text-orange-500" />
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 capitalize">
                  {isRegister
                    ? `Register as ${selectedRole}`
                    : `Login as ${selectedRole}`}
                </h2>
              </div>

              <form className="space-y-6">
                {isRegister && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      id="fullname"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                {isRegister && (
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  onClick={handleAuth}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>{isRegister ? "Create Account" : "Sign In"}</span>
                </button>

                <p className="text-center text-gray-600">
                  {isRegister ? (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsRegister(false)}
                        className="text-orange-500 hover:text-orange-600 font-medium focus:outline-none"
                      >
                        Sign In
                      </button>
                    </>
                  ) : (
                    <>
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsRegister(true)}
                        className="text-orange-500 hover:text-orange-600 font-medium focus:outline-none"
                      >
                        Register
                      </button>
                    </>
                  )}
                </p>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function RoleCard({ title, description, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
    >
      <div className="relative mb-4">
        <div
          className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-${color}-100 to-${color}-200 flex items-center justify-center`}
        >
          <Star className={`h-8 w-8 text-${color}-500`} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </button>
  );
}
