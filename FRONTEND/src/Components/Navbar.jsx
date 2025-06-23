import { Link } from "react-router-dom";
import logo from "../assets/SpacECE.jpeg";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-end mb-2">
        
      </div>
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo Only */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="NGO Logo" className="h-16 w-auto" />
        </Link>
      </div>
    </nav>
  );
}




