import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-500 p-2 rounded-full">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">SpacECE</span>
                <p className="text-gray-400">India Foundation</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Dedicated to enhancing spaces for early childhood development and
              providing quality education to underprivileged children aged 0-4
              across India.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500/20">
                  <span className="text-sm font-bold">f</span>
                </div>
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500/20">
                  <span className="text-sm font-bold">t</span>
                </div>
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500/20">
                  <span className="text-sm font-bold">in</span>
                </div>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  UMANG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Early Learning Centers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Teacher Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Parent Education
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 SpacECE India Foundation. All rights reserved.
            Empowering children for a brighter tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
