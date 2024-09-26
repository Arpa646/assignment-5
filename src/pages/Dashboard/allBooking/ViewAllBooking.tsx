import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
 
} from "@nextui-org/react";
import { useGetAllBookingsQuery } from "@/redux/api/api"; // Fixed typo here
import { PulseLoader } from "react-spinners";


export default function ViewAllBooking() {
  // Fetch booking data from the API
  const { data: bookingData, isLoading, error } = useGetAllBookingsQuery(undefined);

  console.log(bookingData);

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <PulseLoader color="#A18549" size={15} /> {/* Customizable loader */}
      </div>
    );
  }
  if (error) return <p>Error loading bookings.</p>;

  // Render the table with booking data
  return (
    <div className="overflow-x-auto">
      {/* For larger screens */}
      <Table aria-label="Bookings table" className="hidden lg:table">
        <TableHeader>
          <TableColumn>Facility Name</TableColumn>
          <TableColumn>Location</TableColumn>
          <TableColumn>Price/Hour</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>Start Time</TableColumn>
          <TableColumn>End Time</TableColumn>
          <TableColumn>User Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Phone</TableColumn>
          <TableColumn>Payable Amount</TableColumn>
          
        </TableHeader>
        <TableBody>
          {bookingData?.data.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>{item.facility.name}</TableCell>
              <TableCell>{item.facility.location}</TableCell>
              <TableCell>{item.facility.pricePerHour}</TableCell>
              <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
              <TableCell>{item.startTime}</TableCell>
              <TableCell>{item.endTime}</TableCell>
              <TableCell>{item.user.name}</TableCell>
              <TableCell>{item.user.email}</TableCell>
              <TableCell>{item.user.phone}</TableCell>
              <TableCell>{item.payableAmount}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* For smaller screens */}
      <div className="lg:hidden">
        {bookingData?.data.map((item: any) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-md p-4 mb-4 border border-gray-200"
          >
            <h3 className="font-bold text-lg">{item.facility.name}</h3>
            <p className="text-sm text-gray-600">Location: {item.facility.location}</p>
            <p className="text-sm text-gray-600">Price/Hour: ${item.facility.pricePerHour}</p>
            <p className="text-sm text-gray-600">
              Date: {new Date(item.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">Start Time: {item.startTime}</p>
            <p className="text-sm text-gray-600">End Time: {item.endTime}</p>
            <p className="text-sm text-gray-600">User: {item.user.name}</p>
            <p className="text-sm text-gray-600">Email: {item.user.email}</p>
            <p className="text-sm text-gray-600">Phone: {item.user.phone}</p>
            <p className="text-sm text-gray-600">Payable Amount: ${item.payableAmount}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}
