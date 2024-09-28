import React from "react";
import { useGetUserQuery } from "@/redux/api/api";

const AllUser: React.FC = () => {
  const { data, error, isLoading } = useGetUserQuery(undefined);

  const users = (data as any)?.data;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  interface User {
    _id: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    name: string;
    password: string;
    phone: string;
    role: string;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 py-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>

      {/* Table for larger screens */}
      <div className="hidden sm:block overflow-x-auto ">
        <table className="divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              <th className=" text-center p-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className=" text-center  p-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className=" text-center p-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className=" text-center p-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className=" text-center  p-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-white  tex divide-y divide-gray-200">
            {users &&
              users.map((user: User) => (
                <tr key={user._id}>
                  <td className="text-gray-500 shadow-sm p-2 ">{user.name}</td>
                  <td className="text-gray-500 shadow-sm p-2 whitespace-nowrap">{user.email}</td>
                  <td className="text-gray-500 shadow-sm p-2 whitespace-nowrap">{user.phone}</td>
                  <td className="text-gray-500 shadow-sm p-2 whitespace-nowrap">{user.role}</td>
                  <td className="text-gray-500 shadow-sm p-2 whitespace-nowrap">{user.address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="block sm:hidden">
        {users &&
          users.map((user: User) => (
            <div
              key={user._id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
            >
              <div className="mb-2">
                <h3 className="font-bold text-lg">{user.name}</h3>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
                <p className="text-gray-600">Role: {user.role}</p>
                <p className="text-gray-600">Address: {user.address}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllUser;
