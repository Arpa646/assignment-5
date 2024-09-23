import React from "react";
import { useGetUserQuery } from "@/redux/api/api";

const AllUser: React.FC = () => {
  const { data, error, isLoading } = useGetUserQuery(undefined);

  console.log(data);

  const users = (data as any)?.data;

  console.log(users);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  interface User {
    _id:string;
    address: string;
    createdAt:string;
    updatedAt:string;
    email: string;
    name: string;
    password: string;
    phone: string;
    role: string;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
          
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users &&
            users?.map((user: User) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.address}</td>
               
            
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
