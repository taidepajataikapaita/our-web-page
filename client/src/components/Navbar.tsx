import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-emerald-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link to="/" className="text-white hover:text-gray-200">
                <NavigationMenuTrigger>About us</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/workshops" className="text-white hover:text-gray-200">
                <NavigationMenuTrigger>Workshops</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/inquiries" className="text-white hover:text-gray-200">
                <NavigationMenuTrigger>Input form</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="text-white hover:text-gray-200">
                <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex space-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;