import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";
import "./custom.css";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/store";

interface NavLinkProps {
  to: string;
  end?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface MobileNavLinkProps {
  to: string;
  end?: boolean;
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav style={{ color: "black" }} className="pt-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6 text-slate-500" />
            </button>
          </div>

          <div className="w-full flex items-center justify-between">
            {/* Logo */} 
            <h3 className="mt-1  ms-10 text-[30px] font-bold">
              <img
                src="https://cozystay.loftocean.com/mountain-chalet/wp-content/uploads/sites/4/2023/03/logo-255x49.png"
                alt="Logo"
                className="w-[150px] sm:w-[150px] lg:w-[255px]" 
              />
            </h3>

            {/* Desktop links */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" end>
                  Home
                </NavLink>
                <NavLink to="/facilities">Facilities</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
              </div>
            </div>

            {/* Auth and user actions */}
            <div className="hidden sm:flex items-center space-x-4">
              {token ? (
                <>
                  <NavLink to="/">
                    <div className="w-10 h-10 bg-[#A18549] rounded-full flex justify-center items-center">
                      <CiUser className="text-white text-3xl" />
                    </div>
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="bg-white text-[#A18549] hover:bg-[#A18549] hover:text-white py-2 px-4 rounded-lg border border-[#A18549] transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink to="/login">
                  <span className="bg-white text-[#A18549] hover:bg-[#A18549] hover:text-white py-2 px-4 rounded-lg border border-[#A18549] transition-all">
                    Login
                  </span>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-white shadow-lg z-50`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink to="/" end>
            Home
          </MobileNavLink>
          <MobileNavLink to="/facilities">Facilities</MobileNavLink>
          <MobileNavLink to="/dashboard">Dashboard</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
          <MobileNavLink to="/aboutus">About Us</MobileNavLink>

          {token ? (
            <button
              onClick={handleLogout}
              className="w-full text-left bg-[#A18549] text-white py-2 px-4 rounded-lg mt-3"
            >
              Logout
            </button>
          ) : (
            <MobileNavLink to="/login">Login</MobileNavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ to, end, children, className = "" }) => (
  <RouterNavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-black" : "text-gray-700"} ${className}`
    }
  >
    {children}
  </RouterNavLink>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, end, children }) => (
  <RouterNavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `text-gray-700 block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-gray-300 text-gray-900" : ""}`
    }
  >
    {children}
  </RouterNavLink>
);

export default Navbar;
