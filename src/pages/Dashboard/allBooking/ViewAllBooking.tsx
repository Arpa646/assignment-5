import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { useGetAllBookingsQuery } from "@/redux/api/api"; // Fixed typo here

// Mapping for booking status colors
const statusColorMap: { [key: string]: "success" | "warning" | "danger" } = {
  confirmed: "success",
  pending: "warning",
  canceled: "danger",
};

export default function ViewAllBooking() {
  // Fetch booking data from the API
  const { data:bookingData, isLoading, error } = useGetAllBookingsQuery(undefined);

  // const  = data?.data;
  console.log(bookingData);
  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings.</p>;
//    interface Booking {
//     facility: Types.ObjectId;
//     date: Date;
//     startTime: string;
//     endTime: string;
//     user: Types.ObjectId; // Correctly use Types.ObjectId
//     isBooked?: string;
//     payableAmount?: number;


// }
  // Render the table with booking data
  return (
    <Table aria-label="Bookings table">
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
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {bookingData?.map((item :any)  => (
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
            <TableCell>
              <Chip
                color={statusColorMap[item.status]} // Assuming item.status is used for status
                size="sm"
                variant="flat"
              >
                {item.status}
              </Chip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
