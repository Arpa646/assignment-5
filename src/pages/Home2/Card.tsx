import image from "./image.svg";
import star from "./star.svg";
import pc from "./pc.svg";
import bag from "./bag.svg";
import image2 from "./image2.png";
import W from "./W.png";

function Card() {
  const services = [
    {
      icon: `${image}`,
      title: "Web Design",
      description:
        "From concept to launch, we create stunning user-centric websites.",
    },
    {
      icon: `${star}`,
      title: "UI/UX Design",
      description: "We focus on visual appeal and seamless user experience.",
    },
    {
      icon: `${pc}`,
      title: "Responsive Design",
      description: "Designs that work beautifully across all screen sizes.",
    },
    {
      image: `${image2}`,
      icon: `${bag}`,
      title: "E-commerce Solutions",
      description:
        "Full-fledged e-commerce solutions for growing your business.",
    },
    {
      image: `${W}`,
      icon: `${bag}`,
      title: "Webflow",
      description: "Powerful websites using the Webflow platform.",
    },
    {
      icon: `${bag}`,
      title: "Custom Development",
      description: "Bespoke development solutions tailored to your needs.",
    },
  ];

  return (
    <div className=" bg-slate-500">
      <div
        style={{ width: "354px" }}
        className="mt-4 font-raleway ms-11   text-[50.33px] font-bold leading-[56.33px] text-start"
      >
        <h1>What We do</h1>
      </div>

      <div>
        <div
          style={{ width: "354px" }}
          className="mt-4 font-raleway ms-11 text-[50.33px] font-bold leading-[56.33px] text-start"
        ></div>
        <div className="grid grid-cols-4  grid-rows-2 gap-5 p-9 ">
          {services.map((service, index) => (
         <div
         key={index}
         style={{
           width: index === 4 ? "500px" : "280px",
           height: index === 3 ? "536px" : "200px",
           gridColumn: index === 4 ? "span 2" : "span 1",
           gridRow: index === 3 ? "span 2" : "span 1",
           backgroundColor: "white",
          //  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
           borderRadius: "12px",
           padding: "16px",
         }}
       >
              <div className={`${index === 4 ? "flex" : ""}`}>
                <div className="flex space-y-2  flex-col items-start ">
                  <div
                    style={{ backgroundColor: "rgba(245, 248, 255, 1) " }}
                    className="     {`${index === 4 ? 2 : 1}`}  flex rounded-lg  items-center w-[44px] h-[44px]    "
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-5 h-6 mr-2 mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <div>
                    <p className="text-[#898A71] mt-2 text-left">
                      {service.description}
                    </p>
                  </div>
                </div>

                <img
                  className={` mt-${index === 3 ? 16 : 0}`}
                  src={service.image}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Card;
// Reusable text content component for clarity

// Reusable image component for flexibility
