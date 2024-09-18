import MainLayout from "@/components/Layouts/MainLayouts";
import Signup from "@/components/authentication/registration/Signup";
import Login from "@/components/authentication/login/Login";
import Home from "@/pages/Home/Home";
import DashHome from "@/pages/Dashboard/DashHome";
import ViewAllBooking from "@/pages/Dashboard/allBooking/ViewAllBooking";
import FacilityList from "@/pages/FacilityList/FacilityList";
import AboutUsSection from "@/pages/AboutUsSection/AboutUsSection";
import FacilityDetails from "@/pages/FacilityList/FacilityDetails";

import MyBooking from "@/pages/Dashboard/MyBooking";
import FacilityManagement from "@/pages/Dashboard/FacilityManagement/FacilityManagement";
import AddAdmin from "@/pages/Dashboard/AddAdmin/AddAdmin";
import AllUser from "@/pages/Dashboard/AllUser/AllUser";




import DashBoard from "@/pages/Dashboard/DashBoard";

import ContactUs from "@/pages/ContactUs/ContactUs";
import Booking from "@/pages/Booking/Booking";



import NotFound from "@/pages/shared/NotFound";
import ProtectedRoute from "@/components/Layouts/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // Main route
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />, // Home page route
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "aboutus",
        element: <AboutUsSection />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "facilities",
        element: <FacilityList />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/dashboard", // Separate route for dashboard
    element:    <ProtectedRoute> <DashBoard /></ProtectedRoute>,
    children: [
      {
        path: "", // Dashboard home route (empty path is the default route for /dashboard)
        element: <DashHome />,
      },
      {
        path: "myBookings", // Booking user route
        element: <MyBooking />,
      },
      {
        path: "viewallbooking", // View all bookings route
        element: <ViewAllBooking />,
      },
      {
        path: "addAdmin", // Add admin route
        element: <AddAdmin />,
      },
      {
        path: "facilityManagement", // Facility management route
        element: <FacilityManagement />,
      },
      {
        path: "user", // Facility management route
        element: <AllUser />,
      },
    ],
  },
]);

export default router;
