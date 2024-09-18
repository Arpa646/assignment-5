import { useGetFacilitiesQuery } from "@/redux/api/api"; // Update to facility query
import { Link } from "react-router-dom";

export default function FacilityHome() {
  const {
    data: facilitiesDataresult,
    isLoading,
    error,
  } = useGetFacilitiesQuery({}); // Fetching facility data
  const facilitiesData = facilitiesDataresult?.data;
  console.log(facilitiesData);
  if (isLoading) {
    return <p className="text-center text-white">Loading facilities...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">Error fetching facilities.</p>
    );
  }

  // Update Facility type to match the expected data structure
  type Facility = {
    _id: string; // Use _id instead of id if that's what your data uses
    name: string;
    description: string;
    pricePerHour: number;
    location: string;
    image?: string; // Optional image field
  };

  return (
    <div className="bg-black text-white p-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Explore Our Facilities
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Discover the services we offer to make your stay more enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Dynamically generate facility cards */}
          {facilitiesData?.map((facility: Facility, index: number) => (
            <div
              key={facility._id}
              className={`bg-[#151515] border border-[#A18549] ${
                index === 1 ? " relative lg:top-10 p-6" : ""
              }`} // Apply 'relative' and 'mt-20' to the second item (index 1)
            >
              <img
                src={facility.image || "default-image-url.jpg"} // Use facility image or a default placeholder
                alt={facility.name}
                className="w-full h-60 object-cover mb-9"
              />
              <div className="text-left space-x-3">
                <div>
                  <h4 className="text-lg ms-3 font-semibold mb-2 text-[#A18549]">
                    {facility.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  {facility.description}
                </p>
                <a href="#" className=""></a>

                <Link to={`/facility/${facility._id}`}>
                  <span className="text-[#A18549] font-semibold text-sm relative pb-1">
                    DISCOVER MORE &rarr;
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#A18549] transition-all duration-300 ease-in-out hover:w-full"></span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
