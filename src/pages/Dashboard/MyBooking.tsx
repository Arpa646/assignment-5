import {
  useGetFacilityPerUserQuery,
  useCancelBookingMutation,
} from "@/redux/api/api";
import Swal from "sweetalert2";
import { Button } from "@nextui-org/react"; // Make sure Spinner component is available in the UI library
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { PulseLoader } from "react-spinners"; 
export type Booking = {
  _id: string;
  facility: {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    location: string;
    isDeleted: boolean;
    image: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  payableAmount: number;
  isBooked: string;
};

const BookingTable = () => {
  const { data, isLoading, isError } = useGetFacilityPerUserQuery(undefined);
  const bookingsData = data?.data || [];
  const [cancelBooking] = useCancelBookingMutation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <PulseLoader color="#A18549" size={15} /> {/* Customizable loader */}
      </div>
    );
  }


  const handleCancel = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelBooking(id)
          .unwrap()
          .then(() => {
            Swal.fire(
              "Cancelled!",
              "Your booking has been cancelled.",
              "success"
            );
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to cancel the booking.", "error");
            console.error("Failed to cancel the booking:", error);
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-4">
      <h2 className="text-2xl font-bold mb-4">Booking List</h2>

      {/* Show error message if there's an error */}
      {isError && (
        <div className="text-center py-10">
          <p className="text-red-500 text-xl">Failed to load bookings.</p>
        </div>
      )}

      {/* Conditionally render if no bookings */}
      {!isLoading && bookingsData.length === 0 && !isError ? (
        <div className="text-center py-10">
          <p className="text-xl">No bookings here yet.</p>
          <Link to="/facilities">
            <Button className="mt-4 bg-blue-500 text-white rounded">
              Go to Facility Page
            </Button>
          </Link>
        </div>
      ) : (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          {/* Table for larger screens */}
          <table className="hidden sm:table w-full min-w-[600px] table-auto border border-[#877e71c5]">
            <thead className="bg-gray-100 border-b border-[#968874]">
              <tr>
                <th scope="col" className="px-4 py-2 text-left">Image</th>
                <th scope="col" className="px-4 py-2 text-left">Facility</th>
                <th scope="col" className="px-4 py-2 text-left">Payable Price</th>
                <th scope="col" className="px-4 py-2 text-left">Booking Status</th>
                <th scope="col" className="px-4 py-2 text-left">Details</th>
                <th scope="col" className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center border-t border-[#655846]">
              {bookingsData.map((booking: Booking) => (
                <tr key={booking._id} className="bg-white even:bg-gray-100">
                  <td className="px-4 py-2 text-left">
                    <img
                      className="w-20"
                      src={booking.facility?.image}
                      alt={booking.facility.name}
                    />
                  </td>
                  <td className="px-4 py-2 text-left">{booking.facility.name}</td>
                  <td className="px-4 py-2 text-left">${booking.payableAmount.toFixed(2)}</td>
                  <td className="px-4 py-2 text-left">{booking.isBooked}</td>
                  <td className="px-4 py-2 text-left">
                    <Link to={`/facility/${booking.facility._id}`}>
                      <button className="border px-3 py-2 border-[#A18549]">
                        <AiOutlineEye />
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-left">
                    <Button
                      className="font-normal text-black border border-black bg-transparent rounded-none px-2 py-1"
                      onPress={() => handleCancel(booking._id)}
                    >
                      <MdOutlineDeleteOutline />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Card layout for small screens */}
          <div className="block sm:hidden">
            {bookingsData.map((booking: Booking) => (
              <div
                key={booking._id}
                className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col border border-[#706453]"
              >
                <div className="flex items-center mb-2">
                  <img
                    className="w-24 h-24 object-cover rounded-md mr-4"
                    src={booking.facility?.image}
                    alt={booking.facility.name}
                  />
                  <div>
                    <h3 className="font-bold text-lg">{booking.facility.name}</h3>
                    <p className="text-gray-600">{booking.facility.location}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Price: <span className="font-semibold">${booking.payableAmount.toFixed(2)}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Status: <span className="font-semibold">{booking.isBooked}</span>
                  </p>
                </div>
                <div className="mt-4">
                  <Link to={`/facility/${booking.facility._id}`} className="w-full">
                    <button className="border relative px-3 py-2 border-[#A18549]">
                      <AiOutlineEye />
                    </button>
                  </Link>

                  <Button
                    className="border relative px-3 py-2 border-[#A18549] mt-2"
                    onPress={() => handleCancel(booking._id)}
                  >
                    <MdOutlineDeleteOutline />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingTable;
