import React, { useState } from "react";
import {
  useCheckAvailabilityQuery,
  useAddBookingMutation,
} from "@/redux/api/api"; // Import mutation hook
import { useLocation } from "react-router-dom";
import { PulseLoader } from "react-spinners"; 
const Booking = () => {
  const location = useLocation();
  const { facility } = location.state || {}; // Fetch facility details from location

  const [date, setDate] = useState<string>(""); // State to store selected date
  const [selectedSlot, setSelectedSlot] = useState<{
    startTime: string;
    endTime: string;
  } | null>(null); // State for selected slot
  const [shouldFetchAvailability, setShouldFetchAvailability] = useState(false); // To trigger availability check
  const [hasChecked, setHasChecked] = useState(false); // Tracks whether the user has clicked "Check Availability"

  const facilityId = facility?._id; // Facility ID

  // Use the query hook to fetch availability when the "Check Availability" button is clicked
  const { data, error, isLoading } = useCheckAvailabilityQuery(date, {
    skip: !shouldFetchAvailability || !date, // Fetch only when 'Check Availability' is clicked and date is provided
  });

  const availableslot = data?.data || []; // Fallback to empty array if no data

  // Mutation hook to add booking
  const [addBooking, { isLoading: bookingLoading, error: bookingError }] =
    useAddBookingMutation();

  // Handle date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setShouldFetchAvailability(false); // Reset availability on date change
    setHasChecked(false); // Reset "has checked" when date changes
  };

  // Handle slot selection and log the selected slot times
  const handleSlotSelection = (slot: {
    startTime: string;
    endTime: string;
  }) => {
    setSelectedSlot(slot);
    console.log(
      `Selected Slot: Start Time - ${slot.startTime}, End Time - ${slot.endTime}`
    );
  };

  // Confirm booking using mutation
  const handleConfirmBooking = async () => {
    if (selectedSlot && facilityId) {
      const bookingData = {
        booking: {
          facility: facilityId, // Set the facility ID
          date: date, // Selected date
          startTime: selectedSlot.startTime, // Selected slot start time
          endTime: selectedSlot.endTime, // Selected slot end time
        },
      };

      try {
        // Call the mutation to add booking
        const response = await addBooking(bookingData).unwrap();
        console.log("Booking Success:", response);

        // Redirect to payment page
        window.location.href = response.data.payment_url;
      } catch (err) {
        console.error("Booking Error:", err);
      }
    } else {
      alert("Please select a slot.");
    }
  };

  // Handle availability check button click
  const handleCheckAvailability = () => {
    if (date) {
      console.log("Selected Date:", date); // Log selected date
      setShouldFetchAvailability(true); // Trigger availability check
      setHasChecked(true); // Mark that the user has checked availability
    } else {
      alert("Please select a date.");
    }
  };

  return (
    <div className="flex gap-2 flex-col lg:flex-row">
      {/* Facility Details Section */}
      <div className="bg-white shadow-lg w-full lg:w-2/4 items-center mx-auto mt-8 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          You have selected this Facility for booking
        </h1>
        {facility ? (
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">{facility.name}</h2>
            <p className="mt-2">{facility.description}</p>
            <p className="mt-2">
              <strong>Location:</strong> {facility.location}
            </p>
            <p className="mt-2">
              <strong>Price Per Hour:</strong> {facility.pricePerHour}
            </p>
          </div>
        ) : (
          <p>No facility details available.</p>
        )}
      </div>

      {/* Booking Section */}
      <div className="bg-white shadow-lg w-full lg:w-2/4 mx-auto mt-8 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Booking Now</h1>

        {/* Date Selection */}
        <div className="flex justify-between">
          <div style={{ border: "1px solid #A18549" }} className="mb-4">
            <input
              className="border px-4 py-2 lg:w-[300px] w-[250px]"
              type="date"
              value={date}
              onChange={handleDateChange}
              placeholder="Select Date"
            />
          </div>

          {/* Check Availability Button */}
          <button
            style={{ border: "1px solid #A18549" }}
            className="text-black px-4 py-2 mb-4"
            onClick={handleCheckAvailability}
          >
            Check
          </button>
        </div>

        {isLoading &&  <div className="flex justify-center items-center h-screen bg-black">
        <PulseLoader color="#A18549" size={15} /> {/* Customizable loader */}
      </div> }

        {/* Error Handling */}
        {error && (
          <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative mt-4">
            <span className="block sm:inline">
          No Slot Available Please try another day
            </span>
          </div>
        )}

        {/* Display message if no available slots after checking availability */}
        {!error && hasChecked && availableslot.length === 0 && (
          <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative mt-4">
            <span className="block sm:inline">
              No available slots on this date. Please try another date.
            </span>
          </div>
        )}

        {/* Display available slots after checking availability */}
        {!error && hasChecked && availableslot.length > 0 && (
          <div>
            <h2 className="text-xl mb-2">
              Available Slots <br />
              You can book for this date by selecting any slot
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {availableslot.map(
                (
                  slot: { startTime: string; endTime: string },
                  index: number
                ) => (
                  <button
                    key={index}
                    style={{ border: "1px solid #A18549" }}
                    className={`border px-4 py-2 ${
                      selectedSlot?.startTime === slot.startTime &&
                      selectedSlot?.endTime === slot.endTime
                        ? "bg-[#A18549] text-white"
                        : "bg-white text-[#A18549]"
                    }`}
                    onClick={() => handleSlotSelection(slot)}
                  >
                    {slot.startTime} - {slot.endTime}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {selectedSlot && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">
              Selected Slot: {selectedSlot.startTime} - {selectedSlot.endTime}
            </h3>
            <button
              className="bg-[#A18549] text-white px-4 py-2 rounded-lg mt-2"
              onClick={handleConfirmBooking}
              disabled={bookingLoading} // Disable button while booking
            >
              {bookingLoading ? "Booking..." : "Confirm Booking"}
            </button>
            {bookingError && (
              <p className="text-red-500">
                Error occurred while booking
              
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
