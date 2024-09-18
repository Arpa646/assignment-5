import React from "react";
import { Link } from "react-router-dom";
import { TFacility } from "@/types/index"; // Assuming you have TFacility defined

interface FacilityCardProps {
  facility: TFacility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  return (
    <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      {/* Facility Image */}
      <img
        src={facility.image}
        alt={facility.name}
        className="h-64 w-full object-cover"
      />

      {/* Card Content */}
      <div className="p-4 bg-white text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {facility.name}
        </h3>
        <p className="text-lg font-medium text-gray-600 mb-4">
          ${facility.pricePerHour}/hr
        </p>

        {/* View Details Link */}
        <Link
          to={`/facility/${facility._id}`}
          className=" underline  font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FacilityCard;
