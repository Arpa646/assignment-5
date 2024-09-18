import { FaHotel, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const BookingOverview = () => {
  return (
    <div className="bg-white text-center py-12">
      {/* Section Title */}
      <div className="text-gray-700">
        <h5 className="text-sm uppercase tracking-widest mb-2">How It Works</h5>
        <h2 className="text-4xl font-serif">Easy Booking Process</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          Follow these simple steps to complete your booking seamlessly.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 space-y-8 md:space-y-0 md:space-x-8">
        {/* Card 1 - Select Facility */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-[#A18549] rounded-full flex justify-center items-center mb-4">
            <FaHotel className="text-white text-4xl" />
          </div>
          <h3 className="font-bold text-xl mb-2">Step 1: Select Facility</h3>
          <p className="text-gray-500 max-w-xs">
            Choose from a range of luxurious rooms, quality service, and great
            environments.
          </p>
        </div>

        {/* Card 2 - Select Date */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-[#A18549] rounded-full flex justify-center items-center mb-4">
            <FaCalendarAlt className="text-white text-4xl" />
          </div>
          <h3 className="font-bold text-xl mb-2">Step 2: Select Date</h3>
          <p className="text-gray-500 max-w-xs">
            Pick a start date and end date that works for you from our calendar.
          </p>
        </div>

        {/* Card 3 - Confirm Booking */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-[#A18549] rounded-full flex justify-center items-center mb-4">
            <FaCheckCircle className="text-white text-4xl" />
          </div>
          <h3 className="font-bold text-xl mb-2">Step 3: Confirm Booking</h3>
          <p className="text-gray-500 max-w-xs">
            Once everything is selected, finalize your booking and enjoy your
            stay!
          </p>
        </div>
      </div>

      <button
        className="mt-9  hover:bg-[#A18549] rounded-bl-lg rounded-tr-lg hover:text-white text-lg
                       md:text-xl lg:text-2xl font-bold border border-[#A18549] rounded-none
                        p-2 md:p-5 lg:p-4 transition-all duration-300 bg-white text-[#A18549] hover:border-[#A18549]"
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingOverview;
