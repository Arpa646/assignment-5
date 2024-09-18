import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { useGetAllBookingsQuery } from "@/redux/api/api";

// Mapping for booking status colors
const statusColorMap = {
  confirmed: "success",
  pending: "warning",
  canceled: "danger",
};

export default function ViewAllBooking() {
  // Fetch booking data from the API
  const { data: bookingData, isLoading, error } = useGetAllBookingsQuery({});

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings.</p>;

  // Render the table with booking data
  return (
    <Table className="border" aria-label="Bookings table">
      <TableHeader className="border">
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
      <TableBody items={bookingData?.data || []}>
        {(item) => (
          <TableRow className="border" key={item._id}>
            <TableCell className="border"> {item.facility.name}</TableCell>

            <TableCell className="border-black">
              {item.facility.location}
            </TableCell>
            <TableCell className="border-black">
              {item.facility.pricePerHour}
            </TableCell>
            <TableCell className="border-black">
              {new Date(item.date).toLocaleDateString()}
            </TableCell>
            <TableCell className="border-black">{item.startTime}</TableCell>
            <TableCell className="border-black">{item.endTime}</TableCell>
            <TableCell className="border-black">{item.user.name}</TableCell>
            <TableCell className="border-black">{item.user.email}</TableCell>
            <TableCell className="border-black">{item.user.phone}</TableCell>
            <TableCell className="border-black">{item.payableAmount}</TableCell>
            <TableCell className="border-black">
              <Chip
                className="capitalize"
                color={statusColorMap[item.isBooked]}
                size="sm"
                variant="flat"
              >
                {item.isBooked}
              </Chip>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
