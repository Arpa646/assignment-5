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

// Services data
const services = [
  {
    icon: FaPlaneArrival,
    title: "Airport Pick-up Service",
    description:
      "We offer complimentary airport transfers to make your arrival and departure seamless and stress-free.",
  },
  {
    icon: FaConciergeBell,
    title: "Housekeeper Services",
    description:
      "Our housekeeping team is available to ensure your room remains spotless throughout your stay.",
  },
  {
    icon: FaWifi,
    title: "WiFi & Internet",
    description:
      "Stay connected with high-speed WiFi available throughout the entire property.",
  },
  {
    icon: FaTshirt,
    title: "Laundry Services",
    description:
      "We provide on-site laundry and dry cleaning services to keep you looking fresh.",
  },
  {
    icon: FaUtensils,
    title: "Breakfast in Bed",
    description:
      "Enjoy a delicious breakfast delivered right to your room, allowing you to start your day in ultimate comfort.",
  },
  {
    icon: FaCar,
    title: "Private Parking Space",
    description:
      "We offer secure private parking spaces for your vehicle, giving you peace of mind.",
  },
  {
    icon: FaDumbbell,
    title: "Fitness Center",
    description:
      "Stay active during your stay with access to our fully equipped fitness center.",
  },
  {
    icon: FaSwimmingPool,
    title: "Infinity Pool",
    description:
      "Relax and unwind in our stunning infinity pool, offering breathtaking views.",
  },
];

const Benefit = () => (
  <div className="bg-[#201f1f] text-white py-32 px-10">
    {/* Container */}
    <div className="max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="flex flex-wrap justify-between space-y-4 md:space-y-0">
        <div className="md:w-1/2">
          <p className="text-[#A18549]">The Essential In-Room Amenities</p>
          <h2 className="text-3xl mb-8">Our spaces have all the essentials you need for your stay.</h2>
        </div>
        <div className="md:w-1/2">
          <p className="max-w-3xl">Enjoy a comfortable and convenient experience with a wide range of services designed to enhance your stay.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-9">
        {services.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="space-y-4">
            <Icon className="text-[#A18549] text-5xl" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm font-light">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Benefit;
