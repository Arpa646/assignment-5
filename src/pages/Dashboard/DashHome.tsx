import { useSelector } from "react-redux";
import { verifyToken } from "@/utils/verify";
import { FaUsers } from "react-icons/fa";
import DatePicker from "react-datepicker";

import { RootState } from "@/redux/store";

import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { useState } from "react";
import { FaBuilding, FaUserCog, FaClipboardList } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import {
  useGetAllBookingsQuery,
  useGetFacilityPerUserQuery,
  useGetUserQuery,
} from "@/redux/api/api"; // Import the queries

export default function AdminDashboard() {
  const token = useSelector((state: RootState) => state.auth.token);
  const user = verifyToken(token);
  const role = user?.role || "Guest";
  const id = user?.email; // Ensure this matches the payload structure in verifyToken
  console.log(id);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Fetch all bookings and user-specific bookings
  const {
    data: allBookings,
    isLoading: allBookingsLoading,
  } = useGetAllBookingsQuery();
  
  const {
    data: userBookings,
    error: userBookingsError,
    isLoading: userBookingsLoading,
  } = useGetFacilityPerUserQuery(id); // Pass the id (user email) as the argument

  const { data: userProfile } = useGetUserQuery(id);
  console.log(userProfile);

  // Extract booked dates based on role
  const bookedDates: Date[] =
    role === "admin"
      ? allBookings?.map((booking: any) => new Date(booking.date)) || []
      : userBookings?.map((booking: any) => new Date(booking.date)) || [];

  // Function to add the class to booked dates
  const dayClassName = (date: Date): string | undefined => {
    const isBooked = bookedDates.some(
      (bookedDate) =>
        date.getFullYear() === bookedDate.getFullYear() &&
        date.getMonth() === bookedDate.getMonth() &&
        date.getDate() === bookedDate.getDate()
    );
    return isBooked ? "highlighted-date" : undefined;
  };

  return (
    <>
      <div className="text-center shadow-lg w-1/2 mx-auto mt-8 mb-8 p-5">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Dashboard{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <div className="flex items-center justify-center space-x-2 text-xl mt-4">
          <FaUserCog size={30} className="text-blue-500" />
          <span className="font-semibold text-2xl">
            Logged in as:{" "}
            <span className="text-green-600">
              {role === "admin" ? "🛠️ Admin" : role === "user" ? "👤 User" : "Guest"}
            </span>
          </span>
        </div>
      </div>

      <div className="flex p-6 min-h-screen">
        {/* Left Section - Actions */}
        <div className="w-1/2 pr-4">
          <h2 className="text-3xl font-bold mb-6">Actions</h2>
          {role === "admin" && (
            <div className="grid grid-cols-1 gap-4">
              {/* Facility Management */}
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <FaBuilding size={40} className="text-indigo-500 mx-auto" />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  Facility Management
                </h3>
                <p className="text-sm mt-2 text-center">
                  Manage, update, add, or remove facilities.
                </p>
              </div>

              {/* See All Bookings */}
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <FaClipboardList size={40} className="text-yellow-500 mx-auto" />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  See All Bookings
                </h3>
                <p className="text-sm mt-2 text-center">
                  View and manage all facility bookings.
                </p>
              </div>

              {/* Manage Users */}
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <FaUsers size={40} className="text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  User Management
                </h3>
                <p className="text-sm mt-2 text-center">
                  View, manage, and assign roles to users.
                </p>
              </div>

              {/* Add Admin */}
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <MdAddCircleOutline size={40} className="text-red-500 mx-auto" />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  Add Admin
                </h3>
                <p className="text-sm mt-2 text-center">
                  Assign admin roles to trusted users.
                </p>
              </div>
            </div>
          )}
          {role === "user" && (
            <div className="grid grid-cols-1 gap-4">
              {/* See All Own Bookings */}
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <FaClipboardList size={40} className="text-yellow-500 mx-auto" />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  See All Own Bookings
                </h3>
                <p className="text-sm mt-2 text-center">
                  View and manage all your facility bookings and cancel.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Date Picker Calendar */}
        <div className="w-1/2 pl-4">
          <h2 className="text-3xl text-orange-300 font-thin mb-6">
            Here Is the Date Selected by User
          </h2>

          {/* Handle loading state */}
          {allBookingsLoading && <p>Loading bookings...</p>}

          {userBookingsLoading && <p>Loading user bookings...</p>}

          {/* Date Picker */}
          {!allBookingsLoading && !userBookingsLoading && (
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                excludeDates={bookedDates} // Disable booked dates
                dayClassName={dayClassName} // Apply custom class
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
