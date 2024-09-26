import Navbar from "@/pages/Home2/Navbar";
import HeroSection from "@/pages/Home2/HeroSection";
import Card from "@/pages/Home2/Card";

import Slider from "@/pages/Home2/Slider";
import Price from "@/pages/Home2/Price";
import Footer from "@/pages/Home2/Footer";
import Faq from "@/pages/Home2/Faq";
import ContactForm from "@/pages/Home2/ContactForm";
import img from "./logo.png";
import Fotter2 from "./Fotter2.png";
export default function Home2() {
  return (
    <div style={{ backgroundColor: "rgba(245, 248, 255, 1)" }} className="  ">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center -91px",
          backgroundSize: "55%",
        }}
        className="  bg-no-repeat bg-cover h-auto"
      >
        <div className=" ">
          {/* <Navbar></Navbar>
          <HeroSection></HeroSection> */}
          <Card></Card>
          {/* <Price></Price>
          <Faq></Faq> */}
          <hr />

          {/* <div
          
            className="w-full   bg-no-repeat bg-bottom bg-cover bg-blend-overlay"
            style={{ backgroundImage: `url(${Fotter2})` }}
          >
            <ContactForm />
            <Footer />
          </div> */}
        </div>
      </div>
    </div>
  );
}
