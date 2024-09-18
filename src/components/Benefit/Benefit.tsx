
import {
  FaPlaneArrival,
  FaConciergeBell,
  FaWifi,
  FaUtensils,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaTshirt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlaneArrival className="text-[#A18549] text-5xl" />,
    title: "Airport Pick-up Service",
    description:
      "We offer complimentary airport transfers to make your arrival and departure seamless and stress-free.",
  },
  {
    icon: <FaConciergeBell className="text-[#A18549] text-5xl" />,
    title: "Housekeeper Services",
    description:
      "Our housekeeping team is available to ensure your room remains spotless throughout your stay.",
  },
  {
    icon: <FaWifi className="text-[#A18549] text-5xl" />,
    title: "WiFi & Internet",
    description:
      "Stay connected with high-speed WiFi available throughout the entire property.",
  },
  {
    icon: <FaTshirt className="  text-[#A18549] text-5xl" />,
    title: "Laundry Services",
    description:
      "We provide on-site laundry and dry cleaning services to keep you looking fresh.",
  },
  {
    icon: <FaUtensils className="  text-[#A18549] text-5xl" />,
    title: "Breakfast in Bed",
    description:
      "Enjoy a delicious breakfast delivered right to your room, allowing you to start your day in ultimate comfort.",
  },
  {
    icon: <FaCar className="  text-[#A18549] text-5xl mx-auto" />,
    title: "Private Parking Space",
    description:
      "We offer secure private parking spaces for your vehicle, giving you peace of mind.",
  },
  {
    icon: <FaDumbbell className="  text-[#A18549] text-5xl" />,
    title: "Fitness Center",
    description:
      "Stay active during your stay with access to our fully equipped fitness center.",
  },
  {
    icon: <FaSwimmingPool className="  text-[#A18549] text-5xl" />,
    title: "Infinity Pool",
    description:
      "Relax and unwind in our stunning infinity pool, offering breathtaking views.",
  },
];

const Benefit = () => {
  return (
    <div className="bg-[#201f1f] text-white py-32 px-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
          <div className="w-50">
            <p className="  text-[#A18549]"> The Essential In-Room Amenities</p>
            <h2 className="text-3xl mb-8 text-start">
              Our spaces have all the essentials you need for your stay.
            </h2>
          </div>

          <div className="w-50">
            <p className="text-start mb-16 mt-3 max-w-3xl">
              Enjoy a comfortable and convenient experience with a wide range of
              services designed to enhance your stay. Whether you’re here for
              business or leisure, we’ve got you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-9 lg:grid-cols-4 gap-12 text-start">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              {service.icon}
              <h3 className=" font-semibold">{service.title}</h3>
              <p className="text-sm font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
