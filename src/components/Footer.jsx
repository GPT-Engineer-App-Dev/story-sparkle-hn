import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-red-50 text-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-xl font-bold text-red-600">LoveApp</span>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-red-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LoveApp. All rights reserved.</p>
          <p className="mt-2">Spreading love and compassion worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
