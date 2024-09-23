import { useSelector } from "react-redux";
import {
  FaUsers,
  FaBuilding,
  FaUserCog,
  FaClipboardList,
} from "react-icons/fa";
import { RootState } from "@/redux/store"; 
import { MdAddCircleOutline } from "react-icons/md";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  useGetAllBookingsQuery,
  useGetFacilityPerUserQuery,
  useGetSingleUserQuery,
} from "@/redux/api/api"; // Import the queries
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { PulseLoader } from "react-spinners"; // Add a loader package like react-spinners
export default function AdminDashboard() {
  interface CustomJwtPayload {
    role?: string;
    userId?: string;
    useremail?: string;
  }

  const token = useSelector((state: RootState) => state.auth.token);
  const user = token ? jwtDecode<CustomJwtPayload>(token) : null;
  const role: string = user?.role || "Guest";
  const id: string = user?.useremail as string;
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const { data: allBookings, isLoading: allBookingsLoading } =
    useGetAllBookingsQuery(undefined);
  const { data: userBooking, isLoading: userBookingsLoading } =
    useGetFacilityPerUserQuery(id);
  const { data: userProfiles } = useGetSingleUserQuery(id);
  console.log(userProfiles);

  const bookedDates: Date[] =
    role === "admin"
      ? allBookings?.data.map((booking: any) => new Date(booking.date)) || []
      : userBooking?.data.map((booking: any) => new Date(booking.date)) || [];

  const dayClassName = (date: Date): string => {
    const isBooked = bookedDates.some(
      (bookedDate) =>
        date.getFullYear() === bookedDate.getFullYear() &&
        date.getMonth() === bookedDate.getMonth() &&
        date.getDate() === bookedDate.getDate()
    );
    return isBooked ? "highlighted-date" : "";
  };

  return (
    <>
      <div className="text-center shadow-lg mx-auto mt-8 mb-8 p-5 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Dashboard 👋
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-2 text-xl mt-4">
          <FaUserCog size={30} className="text-blue-500" />
          <span className="font-semibold text-2xl">
            Logged in as:{" "}
            <span className="text-green-600">
              {/* {role === "admin" ? "🛠️ Admin" : role === "user" ? "👤 User" : "Guest"} */}

              {userProfiles?.data.name}
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 min-h-screen space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Section - Actions */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            {role === "admin" && (
              <>
                {/* Facility Management */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  <FaBuilding size={40} className="text-indigo-500" />
                  <h3 className="text-xl font-semibold mt-4 text-center">
                    Facility Management
                  </h3>
                  <p className="text-sm mt-2 text-center">
                    Manage, update, add, or remove facilities.
                  </p>
                </div>

                {/* See All Bookings */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  <FaClipboardList size={40} className="text-yellow-500" />
                  <h3 className="text-xl font-semibold mt-4 text-center">
                    See All Bookings
                  </h3>
                  <p className="text-sm mt-2 text-center">
                    View and manage all facility bookings.
                  </p>
                </div>

                {/* Manage Users */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  <FaUsers size={40} className="text-green-500" />
                  <h3 className="text-xl font-semibold mt-4 text-center">
                    User Management
                  </h3>
                  <p className="text-sm mt-2 text-center">
                    View, manage, and assign roles to users.
                  </p>
                </div>

                {/* Add Admin */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  <MdAddCircleOutline size={40} className="text-red-500" />
                  <h3 className="text-xl font-semibold mt-4 text-center">
                    Add Admin
                  </h3>
                  <p className="text-sm mt-2 text-center">
                    Assign admin roles to trusted users.
                  </p>
                </div>
              </>
            )}

            {role === "user" && (
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                <FaClipboardList size={40} className="text-yellow-500" />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  See All Own Bookings
                </h3>
                <p className="text-sm mt-2 text-center">
                  View and manage all your facility bookings and cancel.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Date Picker Calendar */}
        <div className="md:w-1/2">
          <h2 className="text-3xl text-black font-thin mb-6">Selected Date</h2>

          {(allBookingsLoading || userBookingsLoading) && (
            <div className="flex justify-center items-center h-screen bg-black">
              <PulseLoader color="#A18549" size={15} />{" "}
              {/* Customizable loader */}
            </div>
          )}

          {!allBookingsLoading && !userBookingsLoading && (
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                excludeDates={bookedDates}
                dayClassName={dayClassName}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
