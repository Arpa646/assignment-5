import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";

import { useSelector } from "react-redux";
import {  CiUser } from "react-icons/ci";
import "./custom.css"; // Adjust the path to your custom CSS file
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
  // const cartItems = useSelector((state: any) => state.cart.items); // Replace 'any' with your actual state type
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
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6 text-slate-500" />
            </button>
          </div>
          <div className="w-full bg-b flex items-center sm:items-stretch sm:justify-start">
            <div className="flex">
              <h3
                style={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                }}
                className="black mt-1 m-9 text-[40px] font-bold"
              >
                <img
                  src="https://cozystay.loftocean.com/mountain-chalet/wp-content/uploads/sites/4/2023/03/logo-255x49.png"
                  alt=""
                />
              </h3>
              <div></div>
            </div>
            <div className="hidden w-full sm:block sm:ml-6">
              <div className="flex justify-between">
                <div style={{ color: "black" }} className="flex space-x-4 ">
                  <NavLink to="/" end className="no-hover">
                    <span className=" text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[2px] after:bg-orange-200 after:left-0 after:bottom-[-2px] after:origin-left after:transition-transform after:duration-500">
                      Home
                    </span>
                  </NavLink>
                  <NavLink to="/facilities" end className="no-hover">
                    <span className="text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[2px] after:bg-orange-200 after:left-0 after:bottom-[-2px] after:origin-left after:transition-transform after:duration-300">
                      Facilities
                    </span>
                  </NavLink>
                  <NavLink to="/dashboard" className="no-hover">
                    <span className=" text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[2px] after:bg-orange-200 after:left-0 after:bottom-[-2px] after:origin-left after:transition-transform after:duration-300">
                      Dashboard
                    </span>
                  </NavLink>
                  <NavLink to="/contact" className="no-hover">
                    <span className=" text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[2px] after:bg-orange-200 after:left-0 after:bottom-[-2px] after:origin-left after:transition-transform after:duration-300">
                      Contact
                    </span>
                  </NavLink>
                  <NavLink to="/aboutus" className="no-hover">
                    <span className=" text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[2px] after:bg-orange-200 after:left-0 after:bottom-[-2px] after:origin-left after:transition-transform after:duration-300">
                      AboutUs
                    </span>
                  </NavLink>
                </div>
                <div className="flex">
                  {/* <NavLink to="/wishlist" className="no-hover">
                    <span className="flex items-center text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 hover:after:scale-x-100 after:h-[2px] after:bg-orange-200 after:left-0 after:bottom-[-2px] after:origin-left after:transition-transform after:duration-300">
                      <CiHeart className="h-8 w-7 text-black" />
                    </span>
                  </NavLink> */}

                  {token ? (
                    <>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-base">
                          <NavLink to="/" className="no-hover">
                            <div className="w-10 h-10 bg-[#A18549] rounded-full flex justify-center items-center mb-4">
                              <CiUser className="text-white  text-3xl" />
                            </div>
                          </NavLink>
                        </span>
                        <button
                          onClick={handleLogout}
                          className="  hover:bg-[#A18549] rounded-bl-lg rounded-tr-lg hover:text-white text-lg
                       md:text-xl lg:text-1xl lg:px-7 py-2 mb-5 font-bold border border-[#A18549] rounded-none
                    transition-all duration-300 bg-white text-[#A18549] hover:border-[#A18549]
                       
                        "
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <NavLink to="/login" className="no-hover">
                      <span
                        className="hover:bg-[#A18549] rounded-bl-lg rounded-tr-lg hover:text-white text-lg
                       md:text-xl lg:text-1xl lg:px-7 py-3    mb-5 font-bold border border-[#A18549] rounded-none
                    transition-all duration-300 bg-white text-[#A18549] hover:border-[#A18549]"
                      >
                        Login
                      </span>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-800 z-50`}
        id="mobile-menu"
      >
        <div
          className={`px-2 bg-white pt-2 pb-3 space-y-1 transition-all duration-500 ${
            isOpen ? "navbar-visible" : "navbar-hidden"
          }`}
        >
          <MobileNavLink to="/" end>
            Home
          </MobileNavLink>
          <hr />
          <MobileNavLink to="/shop">Shop</MobileNavLink>
          <hr />
          <MobileNavLink to="/manageproduct">Product Manage</MobileNavLink>
          <hr />
          <MobileNavLink to="/about">About Us</MobileNavLink>
          <hr />
          {/* <MobileNavLink to="/cart">Cart {cartItems.length}</MobileNavLink> */}
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<NavLinkProps> = ({
  to,
  end = false,
  children,
  className = "",
}) => (
  <RouterNavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      ` block px-3 py-1 rounded-md text-sm font-light relative transition-all duration-300 ${
        isActive ? " " : ""
      } ${className}`
    }
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-700 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
  </RouterNavLink>
);

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  end = false,
  children,
}) => (
  <RouterNavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `text-gray-700 hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium ${
        isActive ? "bg-gray-300 text-gray-900" : ""
      }`
    }
  >
    {children}
  </RouterNavLink>
);

export default Navbar;
