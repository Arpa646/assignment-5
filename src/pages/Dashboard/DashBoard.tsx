import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { verifyToken } from "@/utils/verify";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa"; // Importing the menu bar icon

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const token = useSelector((state: RootState) => state.auth.token);
  const user = verifyToken(token);
  const role = user.role;

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="text-white bg-gray-800 fixed top-4 right-0 z-50 focus:outline-none py-2 px-4 rounded lg:hidden" // `lg:hidden` added
      >
        <FaBars className="inline-block mr-2" />
      </button>

      {/* Sidebar */}
      <div
        style={{ backgroundColor: "#241F1A" }}
        className={`fixed text-white w-64 space-y-6 py-7 px-2 h-full z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* App Name */}
        <div className="text-center text-2xl mt-8 font-semibold">
          <img
            src="https://cozystay.loftocean.com/mountain-chalet/wp-content/uploads/sites/4/2023/03/logo-255x49.png"
            alt="logo"
          />
        </div>

        {/* Navigation based on role */}
        <nav className="space-y-4">
          <NavLink
            to="/"
            style={{ borderBottom: "1px solid #655846" }}
            className="block py-2.5 px-4  transition duration-200 hover:bg-gray-700"
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/dashboard"
            style={{ borderBottom: "1px solid #655846" }}
            className="block py-2.5 px-4  transition duration-200 hover:bg-gray-700"
          >
            📊 DashBoard Home
          </NavLink>

          {/* Admin Menu */}
          {role === "admin" && (
            <>
              <NavLink
                style={{ borderBottom: "1px solid #655846" }}
                to="/dashboard/facilityManagement"
                className="block py-2.5 px-4  transition duration-200 hover:bg-gray-700"
              >
                🏢 Facility Management
              </NavLink>
              <NavLink
                style={{ borderBottom: "1px solid #655846" }}
                to="/dashboard/viewallbooking"
                className="block py-2.5 px-4  transition duration-200 hover:bg-gray-700"
              >
                📅 See All Bookings
              </NavLink>
              <NavLink
                style={{ borderBottom: "1px solid #655846" }}
                to="/dashboard/addAdmin"
                className="block py-2.5 px-4  transition duration-200 hover:bg-gray-700"
              >
                ➕ Add Admin
              </NavLink>
              <NavLink
                style={{ borderBottom: "1px solid #655846" }}
                to="/dashboard/user"
                className="block py-2.5  rounded-none px-4  transition duration-200 hover:bg-gray-700"
              >
                👥 All Users
              </NavLink>
            </>
          )}

          {/* User Menu */}
          {role === "user" && (
            <NavLink
              to="/dashboard/myBookings"
              className="block py-2.5  px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              📖 My Bookings
            </NavLink>
          )}
        </nav>
      </div>

      <div className="lg:ml-[300px] h-screen bg-white p-10">
        <h1 className="text-3xl font-bold">
          <Outlet />
        </h1>
      </div>
    </>
  );
};

export default DashBoard;
