// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import slider1 from "./slider1.png";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// // import required modules
// import { Pagination } from "swiper/modules";

// export default function Slider() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={"auto"}
//         centeredSlides={true}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div>
//             <img className="w-[732px]" src={`${slider1}`} alt="" srcset="" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SliderComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        slidesPerView={3} // Show 3 slides at a time
        centeredSlides={true} // Center the middle slide
        spaceBetween={30} // Space between slides
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
        className="mySwiper"
      >
        {["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"].map(
          (slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${
                  index === activeIndex
                    ? "w-[600px]" // Middle slide is wider
                    : "w-[300px]" // Side slides are smaller
                } transition-all duration-300`} // Smooth transition between slide sizes
              >
                <div className="bg-gray-300 h-64 w-full flex items-center justify-center">
                  {slide}
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
}
