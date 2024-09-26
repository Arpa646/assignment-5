import { useGetFacilitiesQuery } from "@/redux/api/api"; // Update to facility query
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners"; // Add a loader package like react-spinners

export default function FacilityHome() {
  const { data: facilitiesDataresult, isLoading, error } = useGetFacilitiesQuery(undefined); // Fetching facility data

  const facilitiesData = facilitiesDataresult?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <PulseLoader color="#A18549" size={15} /> {/* Customizable loader */}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500">Error fetching facilities.</p>
    );
  }

  // Facility type definition
  type Facility = {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    location: string;
    image?: string;
  };

  return (
    <div className="bg-black text-white p-10 lg:p-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Explore Our Facilities</h2>
        <p className="text-base lg:text-lg text-gray-400 mb-12">
          Discover the services we offer to make your stay more enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData?.slice(0, 3).map((facility: Facility, index: number) => (
            <div
              key={facility._id}
              className={`bg-[#151515] border border-[#A18549] p-6 rounded-lg shadow-md transition-transform transform ${
                index === 1 ? "lg:-translate-y-6" : ""
              }`}
            >
              <img
                src={facility.image || "default-image-url.jpg"} // Fallback image
                alt={facility.name}
                className="w-full h-48 lg:h-60 object-cover rounded-md mb-6"
              />
              <h4 className="text-lg font-semibold text-[#A18549] mb-2">
                {facility.name}
              </h4>
              <p className="text-sm text-gray-400 mb-4">{facility.description}</p>

              <Link to={`/facility/${facility._id}`}>
                <span className="text-[#A18549] font-semibold text-sm relative hover:underline">
                  DISCOVER MORE &rarr;
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
