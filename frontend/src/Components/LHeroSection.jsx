import { Heart, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getStoredUser } from "../utils/auth";

const HeroSection = () => {
  const user = getStoredUser();
  const isLoggedIn = !!user?.token;

  const getDashboardLink = () => {
    switch (user?.role) {
      case "admin":
        return "/admin/dashboard";
      case "parent":
        return "/dashboard/parent";
      case "volunteer":
        return "/volunteer/dashboard";
      default:
        return "/login";
    }
  };
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF5E6 0%, #FFE4B5 50%, #F5DEB3 100%)",
      }}
    >

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-30">
          <div className="w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-30">
          <div className="w-40 h-40 bg-yellow-300 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-20">
          <Star className="h-16 w-16 text-orange-400 animate-pulse" />
        </div>
      </div>

      {/* Child Silhouette */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20 hidden lg:block">
        <div className="w-80 h-80 bg-gray-400 rounded-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full transform rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6">
          <Heart className="h-16 w-16 text-orange-500 mx-auto mb-4 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          SpacECE India
          <span className="block text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Foundation
          </span>
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"></div>

        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold">
          We enhance spaces for early childhood development
        </h2>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Empowering underprivileged children aged 0-4 with quality early
          childhood education. Building brighter futures through nurturing
          environments and comprehensive development programs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {isLoggedIn ? (
            <Link to={getDashboardLink()}>
              <button className="group bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3">
                <span>Go to Dashboard</span>
                <ChevronRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Join Us
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
