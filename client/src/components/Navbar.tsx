import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';

const Navbar = () => {

  return (
    <nav className="bg-[#3D52A0] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          Taidepajataikapaita
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-white p-2 rounded-md hover:bg-[#7091E6] transition-colors duration-200"
                aria-label="Menu"
              >
                <Menu size={24} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white mt-2">
              <DropdownMenuItem asChild>
                <Link 
                  to="/" 
                  className="w-full px-4 py-2 text-sm hover:bg-[#EDE8F5] text-[#3D52A0] font-medium"
                >
                  About us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/workshops" 
                  className="w-full px-4 py-2 text-sm hover:bg-[#EDE8F5] text-[#3D52A0] font-medium"
                >
                  Workshops
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/inquiries" 
                  className="w-full px-4 py-2 text-sm hover:bg-[#EDE8F5] text-[#3D52A0] font-medium"
                >
                  Give Us Feedback
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/contact" 
                  className="w-full px-4 py-2 text-sm hover:bg-[#EDE8F5] text-[#3D52A0] font-medium"
                >
                  Contact Us
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;