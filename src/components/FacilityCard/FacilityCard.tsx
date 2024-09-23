
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai"; // Eye icon for details

import { TFacility } from "@/types/index"; // Assuming you have TFacility defined
import { jwtDecode } from "jwt-decode";
import { RootState } from "@/redux/store"; 
import { useSelector } from "react-redux";
interface FacilityCardProps {
  facility: TFacility;
}


const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {

  interface CustomJwtPayload {
    role?: string;
    userId?: string;
    useremail?: string;
  }

  const token = useSelector((state: RootState) => state.auth.token);
  const user = token ? jwtDecode<CustomJwtPayload>(token) : null;
  const role: string = user?.role || "Guest";

  
  return (
    <div className="facility-card border flex flex-col md:flex-row justify-center items-center border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="facility-image w-full md:w-1/2">
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-48 md:h-full object-cover rounded-l-lg md:rounded-none"
        />
      </div>

      {/* Content */}
      <div className="p-4 w-full md:w-1/2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {facility.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{facility.description}</p>

        {/* Meta information */}
        <div className="mb-2">
          <span className="font-bold text-gray-700">Location:</span>{" "}
          {facility.location}
        </div>
      </div>

      <div className="h-full border-t md:border-t-0 md:border-l p-4 w-full md:w-1/3 flex flex-col justify-between items-center">
        <div className="mb-4 text-center">
          <span className="font-semibold text-gray-700 text-lg">
            ${facility.pricePerHour}/hr
          </span>
          <br />
          <span className="text-sm text-gray-500">25 bookings</span>
        </div>

        <div className=" space-x-2   ">
        
        <Link to={`/facility/${facility._id}`} className="w-full">
            <button className=" border relative px-3 py-2   border-[#A18549] ">
              <AiOutlineEye />
              <span className="-top-5 text-black left-1 absolute opacity-0 hover:opacity-100 transition-opacity duration-300">
                Details
              </span>
            </button>
          </Link>


    { role=="user"  &&  <Link
            to="/booking"
            state={{ facility }} // Pass the full facility data here
           
          >

            <button  className=" border border-[#A18549] px-3 py-1 text-[#A18549] transition-colors duration-300 hover:bg-[#A18549] hover:text-white">
            Book Now
            </button>
          
          </Link>}
    
         
        </div>




    
    
    
      </div>
    </div>
  );
};

export default FacilityCard;
