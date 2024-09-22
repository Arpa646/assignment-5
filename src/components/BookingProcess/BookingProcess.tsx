import { FaHotel, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const steps = [
  {
    icon: FaHotel,
    title: "Step 1: Select Facility",
    description:
      "Choose from a range of luxurious rooms, quality service, and great environments.",
  },
  {
    icon: FaCalendarAlt,
    title: "Step 2: Select Date",
    description:
      "Pick a start date and end date that works for you from our calendar.",
  },
  {
    icon: FaCheckCircle,
    title: "Step 3: Confirm Booking",
    description:
      "Once everything is selected, finalize your booking and enjoy your stay!",
  },
];

const BookingOverview = () => (
  <div className="bg-white text-center py-12">
    {/* Section Title */}
    <div className="text-gray-700">
      <h5 className="text-sm uppercase tracking-widest mb-2">How It Works</h5>
      <h2 className="text-4xl font-serif">Easy Booking Process</h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-500">
        Follow these simple steps to complete your booking seamlessly.
      </p>
    </div>

    {/* Steps Cards */}
    <div className="flex flex-col md:flex-row justify-center items-center mt-12 space-y-8 md:space-y-0 md:space-x-8">
      {steps.map(({ icon: Icon, title, description }, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-[#A18549] rounded-full flex justify-center items-center mb-4">
            <Icon className="text-white text-4xl" />
          </div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-500 max-w-xs">{description}</p>
        </div>
      ))}
    </div>

    {/* Book Now Button */}
    <button
      className="mt-9 hover:bg-[#A18549] hover:text-white text-lg font-bold border border-[#A18549] p-3
                 rounded-lg transition-all bg-white text-[#A18549]"
    >
      <NavLink to="/facilities">Book Now</NavLink>
    </button>
  </div>
);

export default BookingOverview;
