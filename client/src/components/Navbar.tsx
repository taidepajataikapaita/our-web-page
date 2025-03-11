import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#3D52A0] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          Taidepajataikapaita
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#7091E6] transition-colors duration-200"
          >
            About us
          </Link>
          <Link
            to="/workshops"
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#7091E6] transition-colors duration-200"
          >
            Workshops
          </Link>
          <Link
            to="/inquiries"
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#7091E6] transition-colors duration-200"
          >
            Give Us Feedback
          </Link>
          <Link
            to="/contact"
            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#7091E6] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;