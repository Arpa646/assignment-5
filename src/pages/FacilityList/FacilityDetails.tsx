/* eslint-disable @typescript-eslint/no-explicit-any */
import { PulseLoader } from "react-spinners"; // Add a loader package like react-spinners

import { useGetSingleFacilityQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { RootState } from "@/redux/store"; 
import { useSelector } from "react-redux";
export default function FacilityDetails() {


  interface CustomJwtPayload {
    role?: string;
    userId?: string;
    useremail?: string;
  }

  const token = useSelector((state: RootState) => state.auth.token);
  const user = token ? jwtDecode<CustomJwtPayload>(token) : null;
  const role: string = user?.role || "Guest";






  const { id } = useParams();
  const { data: facilityData, isLoading } = useGetSingleFacilityQuery(
    id as string
  );

  const facility = facilityData?.data;

  console.log(facility);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <PulseLoader color="#A18549" size={15} /> {/* Customizable loader */}
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center p-4 text-black min-h-screen">
        <div className="max-w-6xl w-full  rounded-lg  p-6 animate__animated animate__fadeIn">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <img
                style={{ backgroundColor: "#F9F9F9" }}
                src={facility?.image}
                alt="Facility Image"
                className="w-full mb-4 h-[500px] transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-2/3 px-4">
              <div className="ms-5 text-gray-400 mb-4 space-y-7">
                <div>
                  <h1
                    style={{
                      fontFamily: '"Libre Baskerville", serif',
                      fontWeight: 400,
                      color: "rgb(34, 66, 41)",
                    }}
                    className="text-2xl text-black font-semibold mb-4"
                  >
                    {facility?.name}
                  </h1>
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: '"Libre Baskerville", serif',
                      fontWeight: 300,
                      color: "rgb(34, 66, 41)",
                    }}
                    className="text-2xl text-black font-semibold mb-4"
                  >
                    BDT {facility?.pricePerHour} per hour
                  </h1>
                </div>
                <hr />
                <div>
                  <p
                    style={{ color: "rgb(130, 135, 135)" }}
                    className="text-justify text-black mb-4"
                  >
                    {facility?.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="">
                    <span className="text-[19px] text-black">
                      Location: {facility?.location}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-[19px] text-black">
                      Available Slots: {facility?.availableSlots}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-[19px] text-black">
                      Rating: {facility?.rating || "No ratings yet"}
                    </span>
                  </div>
                  <div className="">
                    <span className="text-[19px] text-black">
                      Status: {facility?.status}
                    </span>
                  </div>
                { role=="user" &&  <NavLink
                    to="/booking"
                    state={{ facility }} // Pass the full facility data here
                  >
                    <button
                      className="mt-9 hover:bg-[#A18549] rounded-bl-lg rounded-tr-lg hover:text-white text-lg
    md:text-xl lg:text-2xl font-bold border border-[#A18549] rounded-none
    p-2 md:p-5 lg:p-4 transition-all duration-300 bg-white text-[#A18549] hover:border-[#A18549]"
                    >
                      Book Now
                    </button>
                  </NavLink>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div
        style={{ fontFamily: "Libre Baskerville" }}
        className="flex text-gray-900 text-3xl justify-center space-x-7"
      >
        <h1 className="border-gray-900 border-b-2">Description</h1>
        <h1 className="border-gray-900 border-b-2">Reviews (0)</h1>
      </div>
      <div style={{ color: "rgb(130, 135, 135)" }} className="container mt-16">
        {facility?.instruction}
      </div>
    </div>
  );
}
