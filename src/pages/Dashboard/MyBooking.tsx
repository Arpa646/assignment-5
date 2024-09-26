import {
  useGetFacilityPerUserQuery,
  useCancelBookingMutation,
} from "@/redux/api/api";
import Swal from "sweetalert2";

import { Button } from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";

export type Booking = {
  _id: string;
  facility: {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    location: string;
    isDeleted: boolean;
    image:string
  };
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  payableAmount: number;
  isBooked: string;
};

const BookingTable = () => {
  const { data } = useGetFacilityPerUserQuery(undefined);
  const bookingsData = data?.data;
console.log(bookingsData)
  const [cancelBooking] = useCancelBookingMutation();

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
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <table className="w-full min-w-[600px] table-auto border border-blue-300">
          <thead className="bg-gray-100 border-b border-blue-300">
            <tr>
              <th scope="col" className="px-4 py-2 text-left">Image</th>
              <th scope="col" className="px-4 py-2 text-left">Facility</th>
              <th scope="col" className="px-4 py-2 text-left">Payable Price</th>
              <th scope="col" className="px-4 py-2 text-left">Booking Status</th>
              <th scope="col" className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center border-t border-blue-300">
            {bookingsData &&
              bookingsData.map((booking: Booking) => (
                <tr key={booking._id} className="bg-white even:bg-gray-100">
                  <td className="px-4 py-2 text-left"><img className="w-20" src={booking.facility.image} alt=""  /></td>
                  <td className="px-4 py-2 text-left">{booking.facility.name}</td>



                  <td className="px-4 py-2 text-left">${booking.payableAmount.toFixed(2)}</td>
                  <td className="px-4 py-2 text-left">{booking.isBooked}</td>
                  <td className="px-4 py-2 text-left">
                    <div className="flex justify-center md:justify-start">
                      <Button
                        className="font-normal text-black border border-black bg-transparent rounded-none px-2 py-1"
                        onPress={() => handleCancel(booking._id)}
                      >
                        <MdOutlineDeleteOutline />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
