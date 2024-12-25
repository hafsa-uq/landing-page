import { Link } from 'react-router-dom';
import Pricing from './Pricing';

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-3 bg-gray-200 px-4 md:px-16"> 
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mt-7">
        <Link to="/"> 
          <img
            src="/images/logo.png"  
            alt="UNIQ heights Logo"
            className="h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48"  
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="hidden md:flex items-center space-x-4 pr-10"> 
        <Link to="pricing" className="text-gray-700 font-medium hover:text-blue-600">
          Pricing
        </Link>
        <Link to = "demo" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Book a Demo
        </Link>
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center space-x-4">
        <button className="text-gray-700 font-medium hover:text-blue-600">
          Pricing
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
