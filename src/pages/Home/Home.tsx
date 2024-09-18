import { HeroSection } from "@/components/HeroSection/HeroSection";
import Checking from "@/components/checkAvablity/Checking";
import BookingProcess from "@/components/BookingProcess/BookingProcess";
import ServicesOverview from "@/components/Services/ServicesOverview ";

import Testimonial from "@/components/Testimonial/Testimonial";
import Benefit from "@/components/Benefit/Benefit";
import FacilityHome from "@/components/facilityHome/FacilityHome";

import Image from "@/pages/Image/Image";

import { FaArrowUp } from "react-icons/fa";
export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <button
        style={{ backgroundColor: "#A18549" }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
      >
        <FaArrowUp className="text-xl" />
      </button>
      <HeroSection />
      <Checking />
      {/* <Room /> */}
      <Benefit />

      <BookingProcess />
      <FacilityHome />
      <ServicesOverview />

      {/* <Section /> */}
      <Testimonial />

      <Image />
    </div>
  );
}
