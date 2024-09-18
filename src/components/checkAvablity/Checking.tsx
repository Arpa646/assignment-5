
import { useCheckAvailabilityQuery } from "@/redux/api/api"; // Import the query hook

function Checking() {
  // const [date, setDate] = useState<string>(""); // State to store selected date

  // // Use the query hook
  // const { data, error, isLoading } = useCheckAvailabilityQuery(date, {
  //   skip: !date,
  // });

  // console.log(data);
  // const handleCheckAvailability = () => {
  //   if (!date) {
  //     alert("Please select a date.");
  //   }
  // };

  return (
    <div>

    </div>
    // <div
    //   style={{ boxShadow: "2px 10px 20px black" }}
    //   className="bg-white w-3/4 flex border-7 mt-[-40px] mx-[170px] absolute justify-center"
    // >
    //   <div className="space-x-2 h-28   ">
    //     <input
    //       className="border px-8 py-3"
    //       type="date"
    //       value={date}
    //       onChange={(e) => setDate(e.target.value)} // Update date state
    //       placeholder="Select Date"
    //     />

    //     <button
    //       className="mt-9 bg-[#A18549] text-white text-lg
    //       md:text-xl lg:text-2xl   font-thin border-[#A18549] rounded-none
    //       p-2 md:p-5 lg:p-1 transition-all duration-300 hover:bg-white hover:text-[#A18549] hover:border-[#A18549]"
    //       onClick={handleCheckAvailability} // Trigger check availability
    //     >
    //       Check Availability
    //     </button>

    //     {/* Loading, Error, or Availability Results */}
    //     {isLoading && <p>Loading...</p>}
    //     {error && <p>Error checking availability</p>}
    //     {data && (
    //       <div className="mt-4">
    //         <p>Available Slots: {data.availableSlots}</p>
    //         {/* Render available slots or other data as needed */}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

export default Checking;
