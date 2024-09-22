import React, { useState } from "react";
import {
  useCheckAvailabilityQuery,
  useAddBookingMutation,
} from "@/redux/api/api"; // Import mutation hook
//import { useNavigate } from "react-router-dom"; // For navigation to booking confirmation

const Booking = () => {
  const [date, setDate] = useState<string>(""); // State to store selected date
  const [selectedSlot, setSelectedSlot] = useState<{
    startTime: string;
    endTime: string;
  } | null>(null); // State for selected slot
  const facilityId = "668947f90da1ea65db195306"; // Facility ID (replace with dynamic value if needed)
  // const navigate = useNavigate(); // To navigate to booking confirmation page

  // Use the query hook with the date parameter and skip fetching if date is not provided
  const { data, error, isLoading } = useCheckAvailabilityQuery(date, {
    skip: !date, // Skip fetching if date is empty
  });

  // interface AvailabilityResponse {
  //   data: any; // Replace `any` with the actual type if known
  // }

  // // Assume `useCheckAvailabilityQuery` is the query hook
  // const { data } = useCheckAvailabilityQuery(date);

  const availableslot = data?.data;

  // const availableslot=data?.data

  // Mutation hook to add booking
  const [
    addBooking,
    { isLoading: bookingLoading, error: bookingError,},
  ] = useAddBookingMutation();

  // Handle date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
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

  // Create an interface for the booking data
  interface BookingData {
    booking: {
      facility: string; // Assuming facilityId is a string
      date: string; // Assuming date is a string (could also be Date if using Date objects)
      startTime: string; // Assuming time is a string
      endTime: string; // Assuming time is a string
    };
  }

  // Confirm booking using mutation
  const handleConfirmBooking = async () => {
    if (selectedSlot) {
      const bookingData: BookingData = {
        booking: {
          facility: facilityId, // Set the facility ID
          date: date, // Selected date
          startTime: selectedSlot.startTime, // Selected slot start time
          endTime: selectedSlot.endTime, // Selected slot end time
        },
      };

      console.log(bookingData);
      try {
        // Call the mutation to add booking
        const response = await addBooking(bookingData).unwrap(); // Unwrap the result to handle the response
        console.log("Booking Success:", response);

       console.log("booik", response);
         window.location.href = response.data.payment_url;

        // Navigate to the booking confirmation page
        // navigate(`/confirm-booking`, { state: bookingData });
      } catch (err) {
        console.error("Booking Error:", err);
      }
    } else {
      alert("Please select a slot.");
    }
  };

  // const [formData] = useState({
  //   date: "",
  //   startTime: "",
  //   endTime: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e :React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Add your form submission logic here, such as sending the form data to the server
  // };
  return (
    <div>
      <div
        // style={{ backgroundColor: "rgb(47,58,49)" }}
        className="bg-white shadow-lg w-2/4 mx-auto mt-8 p-6 rounded-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Booking Page</h1>

        <div style={{ border: " 1px solid #A18549" }} className="mb-4">
          <input
            className="border px-4 py-2 w-full"
            type="date"
            value={date}
            onChange={handleDateChange}
            placeholder="Select Date"
          />
        </div>

        <button
          style={{ border: " 1px solid #A18549" }}
          className=" text-black px-4 py-2  mb-4"
          onClick={() => setDate(date)} // Trigger query when date is set
        >
          Check Availability
        </button>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error checking availability</p>}
        {data && availableslot && availableslot.length > 0 && (
          <div>
            <h2 className="text-xl  mb-2">
              Available Slots <br />
              You can direct book for this date by selecting any slot
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {availableslot?.map(
                (
                  slot: { startTime: string; endTime: string },
                  index: number
                ) => (
                  <button
                    style={{ border: " 1px solid #A18549" }}
                    key={index}
                    className={`border px-4 py-2  ${
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
              <p className="text-red-500">Error occurred while booking.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;

// {/*
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#494e40f8] mt-7 text-white max-w-md mx-auto p-6 shadow-lg rounded-md"
//       >
//         <h2 className="text-center   mb-4">CHOOSE DATE TO SEARCH</h2>
//         <h3 className="text-center text-2xl font-serif mb-6">BOOK YOUR STAY</h3>

//         {/* Date */}
//         <div className="mb-4">
//           <label className="block mb-1 text-sm">Date</label>
//           <input
//             style={{ border: "1px solid  #A18549" }}
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full p-2 text-white bg-transparent border focus:outline-none"
//             required
//           />
//         </div>

//         {/* Start Time */}
//         <div className="mb-4">
//           <label className="block mb-1 text-sm">Start Time</label>
//           <input
//             style={{ border: "1px solid  #A18549" }}
//             type="time"
//             name="startTime"
//             value={formData.startTime}
//             onChange={handleChange}
//             className="w-full p-2 text-black bg-transparent border border-orange-200  focus:outline-none"
//             required
//           />
//         </div>

//         {/* End Time */}
//         <div className="mb-4">
//           <label className="block mb-1 text-sm">End Time</label>
//           <input
//             style={{ border: "1px solid  #A18549" }}
//             type="time"
//             name="endTime"
//             value={formData.endTime}
//             onChange={handleChange}
//             className="w-full p-2 text-black bg-transparent border focus:outline-none"
//             required
//           />
//         </div>

//         {/* Children */}

//         <button
//           type="submit"
//           className="w-full bg-[#A18549] p-2   text-white font-semibold hover:bg-[#8d7443] transition-colors"
//         >
//           Check Availability
//         </button>
//       </form> */}

// import React, { useState } from "react";
// import {
//   useCheckAvailabilityQuery,
//   useAddBookingMutation,
// } from "@/redux/api/api"; // Import mutation hook
// import { useNavigate } from "react-router-dom"; // For navigation to booking confirmation

// const Booking = () => {
//   const [date, setDate] = useState<string>(""); // State to store selected date
//   const [selectedSlot, setSelectedSlot] = useState<{
//     startTime: string;
//     endTime: string;
//   } | null>(null); // State for selected slot
//   const facilityId = "668947f90da1ea65db195306"; // Facility ID (replace with dynamic value if needed)
//   const navigate = useNavigate();
//    // To navigate to booking confirmation page
// console.log(date)
//   // Use the query hook with the date parameter and skip fetching if date is not provided
//   const { data, error, isLoading } = useCheckAvailabilityQuery(date);
//   console.log("available dates", error);

//   // Mutation hook to add booking
//   const [
//     addBooking,
//     { isLoading: bookingLoading, error: bookingError },
//   ] = useAddBookingMutation();

//   // Handle date change
//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDate(e.target.value);
//   };

//   // Handle slot selection and log the selected slot times
//   const handleSlotSelection = (slot: {
//     startTime: string;
//     endTime: string;
//   }) => {
//     setSelectedSlot(slot);
//     console.log(
//       `Selected Slot: Start Time - ${slot.startTime}, End Time - ${slot.endTime}`
//     );
//   };

//   // Confirm booking using mutation
//   const handleConfirmBooking = async () => {
//     if (selectedSlot) {
//       const bookingData = {
//         booking: {
//           facility: facilityId, // Set the facility ID
//           date: date, // Selected date
//           startTime: selectedSlot.startTime, // Selected slot start time
//           endTime: selectedSlot.endTime, // Selected slot end time
//         },
//       };

//       console.log(bookingData);
//       try {
//         // Call the mutation to add booking
//         const response = await addBooking(bookingData).unwrap(); // Unwrap the result to handle the response
//         console.log("Booking Success:", response);

//         // Navigate to the booking confirmation page
//         navigate(`/confirm-booking`, { state: bookingData });
//       } catch (err) {
//         console.error("Booking Error:", err);
//       }
//     } else {
//       alert("Please select a slot.");
//     }
//   };

//   return (
//     <div>
//       <div className="bg-white shadow-lg w-2/4 mx-auto mt-8 p-6 rounded-lg">
//         <h1 className="text-3xl font-bold text-center mb-4">Booking Page</h1>

//         <div style={{ border: "1px solid #A18549" }} className="mb-4">
//           <input
//             className="border px-4 py-2 w-full"
//             type="date"
//             value={date}
//             onChange={handleDateChange}
//             placeholder="Select Date"
//           />
//         </div>

//         <button
//           style={{ border: "1px solid #A18549" }}
//           className="text-black px-4 py-2 mb-4"
//           onClick={() => setDate(date)} // Trigger query when date is set
//         >
//           Check Availability
//         </button>

//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error checking availability</p>}
//         {data && data.data && data.data.length > 0 && (
//           <div>
//             <h2 className="text-xl mb-2">
//               Available Slots <br />
//               You can directly book for this date by selecting any slot
//             </h2>
//             <div className="grid grid-cols-2 gap-4">
//               {data.data.map(
//                 (
//                   slot: { startTime: string; endTime: string },
//                   index: number
//                 ) => (
//                   <button
//                     style={{ border: "1px solid #A18549" }}
//                     key={index}
//                     className={`border px-4 py-2 ${
//                       selectedSlot?.startTime === slot.startTime &&
//                       selectedSlot?.endTime === slot.endTime
//                         ? "bg-[#A18549] text-white"
//                         : "bg-white text-[#A18549]"
//                     }`}
//                     onClick={() => handleSlotSelection(slot)}
//                   >
//                     {slot.startTime} - {slot.endTime}
//                   </button>
//                 )
//               )}
//             </div>
//           </div>
//         )}

//         {selectedSlot && (
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold">
//               Selected Slot: {selectedSlot.startTime} - {selectedSlot.endTime}
//             </h3>
//             <button
//               className="bg-[#A18549] text-white px-4 py-2 rounded-lg mt-2"
//               onClick={handleConfirmBooking}
//               disabled={bookingLoading} // Disable button while booking
//             >
//               {bookingLoading ? "Booking..." : "Confirm Booking"}
//             </button>
//             {bookingError && (
//               <p className="text-red-500">Error occurred while booking.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Booking;
