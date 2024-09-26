import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div
        style={{ fontFamily: "" }}
        className="mt-3 font-raleway  flex items-center  mx-auto w-[400px] h-[240px]  text-[50.33px] font-bold leading-[56.33px] text-center"
      >
        <h1>Awesome UI Dark Template for Webflow Agency</h1>
      </div>
      <button class="bg-black text-white font-raleway py-2 px-6 rounded">Click Me</button>
    </div>
  );
}
export default HeroSection;
// Reusable text content component for clarity

// Reusable image component for flexibility
