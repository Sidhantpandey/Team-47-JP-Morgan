import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/SpacECE.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleJoinUs = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
         
              <Link to="/" className="flex items-center">
                <img src={logo} alt="NGO Logo" className="h-16 w-auto" />
              </Link>
         
            <div>
              <span className="text-xl font-bold text-gray-800">SpacECE</span>
              <p className="text-sm text-gray-600">India Foundation</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#programs"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Programs
            </a>
            <a
              href="#impact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Our Impact
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
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
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 mt-4 px-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#programs"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Programs
              </a>
              <a
                href="#impact"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Our Impact
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
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
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
