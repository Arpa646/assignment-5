import {  CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export function HeroSection() {
  const sliderData = {
    image: "https://rovero-next.vercel.app/images/hero/hm1-hero-img2.jpg",
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-transparent">
        <CardContent className="flex flex-col md:flex-row justify-between items-center h-full w-full">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-10 md:text-start text-center p-4">
            <p className="text-xs md:text-sm lg:text-lg uppercase text-[#A18549]">
              IT'S AMAZING
            </p>

            <h1
              className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mt-2"
              style={{
                fontFamily: '"Libre Baskerville", serif',
                fontWeight: 700,
                color: "rgb(34, 66, 41)",
              }}
            >
              Enjoy A Dream <br className="hidden md:block" /> Vacation In The{" "}
              <br className="hidden md:block" />
              Hotel Rovero
            </h1>

            <p className="text-base md:text-lg lg:text-xl mt-5 text-gray-600 md:w-3/4 mx-auto md:mx-0">
              Sports inspire teamwork, discipline, and perseverance. They bring
              people together, promoting both physical and mental well-being.
            </p>

            <NavLink to="/facilities">
              <Button
                className="mt-6 md:mt-9 bg-[#A18549] text-white text-base md:text-lg lg:text-xl font-bold border border-[#A18549] 
              rounded-none py-2 md:py-3 lg:py-4 px-6 md:px-8 transition-all duration-300 hover:bg-white hover:text-[#A18549] 
              hover:border-[#A18549]"
              >
                Book Now
              </Button>
            </NavLink>
          </div>

          {/* Image */}
          <div className="mt-6 md:mt-0">
            <img
              src={sliderData.image}
              className="w-full md:w-[300px] lg:w-[400px] object-cover"
              alt="Hero Image"
            />
          </div>
        </CardContent>
      </div>
    </div>
  );
}
