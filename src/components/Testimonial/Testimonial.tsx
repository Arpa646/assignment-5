import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const facilityTestimonials = [
  {
    name: "Emma Thompson",
    picture:
      "https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/author-profile-150x150.jpg",
    review:
      "Staying at your facility was an absolute delight! The rooms were immaculate, and the staff was attentive to every detail. The serene location made it perfect for relaxation, while the modern amenities exceeded my expectations.",
    rating: 5,
    stars: "⭐⭐⭐⭐⭐",
    facilityName: "Your Facility Name",
  },
  {
    name: "Michael Scott",
    picture:
      "https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/author-profile-150x150.jpg",
    review:
      "The service at your facility was top-notch. I appreciated the thoughtful touches like complimentary refreshments and the friendly attitude of the staff. I felt welcomed and well cared for throughout my stay.",
    rating: 5,
    stars: "⭐⭐⭐⭐⭐",
    facilityName: "Your Facility Name",
  },
  {
    name: "Sarah Williams",
    picture:
      "https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/author-profile-150x150.jpg",
    review:
      "The facilities were fantastic – the pool area was pristine, and the fitness center was well-equipped. The entire experience left me feeling refreshed and rejuvenated. I can’t wait to return for another stay.",
    rating: 5,
    stars: "⭐⭐⭐⭐⭐",
    facilityName: "Your Facility Name",
  },
  {
    name: "James Anderson",
    picture:
      "https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/author-profile-150x150.jpg",
    review:
      "I was impressed by the attention to detail at your facility. From the well-maintained grounds to the luxurious spa, everything was carefully curated to ensure guests had the best experience. I highly recommend it!",
    rating: 5,
    stars: "⭐⭐⭐⭐⭐",
    facilityName: "Your Facility Name",
  },
  {
    name: "Emily Clark",
    picture:
      "https://cozystay.loftocean.com/countryside-lodge/wp-content/uploads/sites/5/2023/03/author-profile-150x150.jpg",
    review:
      "This is by far one of the best experiences I’ve had. The facility offered a perfect blend of comfort and luxury. The customer service was excellent, and the staff went above and beyond to make sure I had everything I needed.",
    rating: 5,
    stars: "⭐⭐⭐⭐⭐",
    facilityName: "Your Facility Name",
  },
];

export default function FacilityTestimonial() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Guests Say
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {facilityTestimonials.map((testimonial, index) => (
          <SwiperSlide className="p-9" key={index}>
            <div className="shadow-lg rounded-lg p-6 text-center">
              <div className="text-orange-300 mb-4 text-xl">
                {testimonial.stars}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.review}"</p>
              <div className="flex flex-col items-center justify-center">
                <img
                  src={testimonial.picture}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.facilityName}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
