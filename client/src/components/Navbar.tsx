import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200";
    return isActive(path)
      ? `${baseClass} bg-[#7091E6] border-b-2 border-white`
      : `${baseClass} hover:bg-[#7091E6]`;
  };

  const getMobileLinkClass = (path: string) => {
    const baseClass = "w-full px-4 py-2 text-sm text-[#3D52A0] font-medium transition-all duration-200";
    return isActive(path)
      ? `${baseClass} bg-[#EDE8F5] border-l-4 border-[#3D52A0]`
      : `${baseClass} hover:bg-[#EDE8F5]`;
  };

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
            className={getLinkClass('/')}
          >
            About us
          </Link>
          <Link
            to="/workshops"
            className={getLinkClass('/workshops')}
          >
            Workshops
          </Link>
          <Link
            to="/inquiries"
            className={getLinkClass('/inquiries')}
          >
            Give Us Feedback
          </Link>
          <Link
            to="/contact"
            className={getLinkClass('/contact')}
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
                  className={getMobileLinkClass('/')}
                >
                  About us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/workshops" 
                  className={getMobileLinkClass('/workshops')}
                >
                  Workshops
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/inquiries" 
                  className={getMobileLinkClass('/inquiries')}
                >
                  Give Us Feedback
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/contact" 
                  className={getMobileLinkClass('/contact')}
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