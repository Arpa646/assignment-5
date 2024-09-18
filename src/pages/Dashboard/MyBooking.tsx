import React, { useEffect, useState } from "react";
import {
  useGetFacilityPerUserQuery,
  useCancelBookingMutation,
} from "@/redux/api/api"; // Update this with your booking-related API hooks
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { MdOutlineDeleteOutline } from "react-icons/md";

// export type Booking = {
//   _id: string;
//   facility: {
//     _id: string;
//     name: string;
//     description: string;
//     pricePerHour: number;
//     location: string;
//     isDeleted: boolean;
//   };
//   date: string;
//   startTime: string;
//   endTime: string;
//   user: string;
//   payableAmount: number;
//   isBooked: string;
// };

const BookingTable = () => {
  const { data: bookingsData, error } = useGetFacilityPerUserQuery({});
  const [cancelBooking] = useCancelBookingMutation();
  console.log("test", bookingsData && bookingsData);
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
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Booking List</h2>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <table className="w-full">
          <thead className=" border border-blue-300">
            <tr>
              <th scope="col">Facility</th>

              <th scope="col">Payable Price</th>
              <th scope="col">Booking Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className=" border  text-center border-blue-300">
            {bookingsData &&
              bookingsData.data.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.facility?.name}</td>

                  <td>${booking.payableAmount.toFixed(2)}</td>
                  <td>{booking.isBooked}</td>
                  <td className="flex">
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
      </div>
    </div>
  );
};

export default BookingTable;
