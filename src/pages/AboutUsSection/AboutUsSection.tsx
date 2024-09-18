import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
const AboutUsSection = () => {
  return (
    <div>
      <div style={{ backgroundColor: "rgb(21,23,25)" }} className="bg-black  ">
        <section
          style={{ backgroundColor: "rgb(21,23,25)" }}
          className="bg-black w-3/4  mx-auto   h-screen text-white flex flex-col md:flex-row p-8 md:p-16"
        >
          {/* Left Side - Text */}
          <div className="md:w-2/4  md:ml-16 mt-8 md:mt-0 relative">
            {/* Top Image */}
            <img
              className=" relative z-0"
              src="https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/img-33-550x733.jpg"
              alt="Sports Event"
            />

            {/* Bottom Image */}
            <img
              className=" absolute w-3/4 top-32 left-48 z-10"
              src="https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/04/img-34-2-370x555.jpg"
              alt="Team Training"
            />
          </div>
          <div className="md:w-3/4 ms-44  ">
            <h2 className="text-gray-400 uppercase text-sm mb-2">
              The Spirit of Champions
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A New Era of Champions
            </h1>
            <p className="text-lg mb-6">
              Our journey in the world of sports has been defined by passion,
              perseverance, and excellence. From humble beginnings, we have
              risen to become champions on the world stage, driven by
              determination and an unrelenting pursuit of greatness. Every
              victory we’ve celebrated, every challenge we’ve faced, has brought
              us closer to our dreams. Today, we continue to inspire and be
              inspired by the world of sports.
            </p>
            <p className="text-lg">
              Every game, every challenge, and every win brings us closer to a
              brighter future in sports.
            </p>
            <p className="mt-6 font-semibold text-xl">The Spirit Lives On...</p>
          </div>

          {/* Right Side - Images */}
        </section>
        <section
          style={{ backgroundColor: "rgb(21,23,25)" }}
          className="bg-black w-3/4  mx-auto   h-screen text-white flex flex-col md:flex-row p-8 md:p-16"
        >
          {/* Left Side - Text */}
          <div className="md:w-1/2">
            <h2 className="text-gray-400 uppercase text-sm mb-2">
              The Spirit of Champions
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A New Era of Champions
            </h1>
            <p className="text-lg mb-6">
              Our journey in the world of sports has been defined by passion,
              perseverance, and excellence. From humble beginnings, we have
              risen to become champions on the world stage, driven by
              determination and an unrelenting pursuit of greatness. Every
              victory we’ve celebrated, every challenge we’ve faced, has brought
              us closer to our dreams. Today, we continue to inspire and be
              inspired by the world of sports.
            </p>
            <p className="text-lg">
              Every game, every challenge, and every win brings us closer to a
              brighter future in sports.
            </p>
            <p className="mt-6 font-semibold text-xl">The Spirit Lives On...</p>
          </div>

          {/* Right Side - Images */}
          <div className="md:w-1/2 md:ml-16 mt-8 md:mt-0 relative">
            {/* Top Image */}
            <img
              className=" relative z-10"
              src="https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/04/mk-s-KiH1EizXh58-unsplash-370x557.jpg"
              alt="Sports Event"
            />

            {/* Bottom Image */}
            <img
              className=" absolute top-12 left-40 z-0"
              src="https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/04/kam-idris-hYb7kbu4x7E-unsplash-550x600.jpg"
              alt="Team Training"
            />
          </div>
        </section>
      </div>
      <div className="max-w-7xl mx-auto px-4 bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lvu-u4DzvgAExdTm2cXRVc-4pqXcKafhDrZkictyVUU="
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-bold">Luna Wayne</h3>
            <p className="text-sm text-gray-500">Marketing Director</p>
            <p className="mt-4 text-sm text-gray-600">
              Luna leads our marketing team with her exceptional skills in
              digital marketing and client relations.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=8Ugqyp2TveGKDtzT_n18b3ECDJQHvfLhyuU1JDdfVDQ="
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-bold">Ayesha Gupta</h3>
            <p className="text-sm text-gray-500">Product Manager</p>
            <p className="mt-4 text-sm text-gray-600">
              Ayesha oversees product development and ensures that all team
              efforts are aligned with our strategic goals.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs="
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-sm text-gray-500">Lead Developer</p>
            <p className="mt-4 text-sm text-gray-600">
              John is our go-to person for all technical decisions, with years
              of experience in full-stack development.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs="
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-sm text-gray-500">Lead Developer</p>
            <p className="mt-4 text-sm text-gray-600">
              John is our go-to person for all technical decisions, with years
              of experience in full-stack development.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white p-16">
        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Heading and Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-gray-400 uppercase text-sm mb-2">
              Stay Tuned with CozyStay
            </h3>
            <h2 className="text-4xl font-semibold leading-tight">
              Sign up for our newsletter to receive our news, deals and special
              offers.
            </h2>
          </div>

          {/* Right Side - Input Field and Checkbox */}
          <div className="md:w-1/2 flex flex-col items-end">
            <div className="flex items-center w-full mb-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-transparent border-b border-gray-600 p-2 outline-none text-white placeholder-gray-400"
              />
              <button className="ml-4 text-white border-b border-transparent hover:border-gray-600">
                Subscribe
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="privacy" className="accent-gray-600" />
              <label htmlFor="privacy" className="text-gray-400 text-sm">
                I agree to the Privacy Policy
              </label>
            </div>
          </div>
        </div>
        {/* Bottom Footer with Icons
        <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs mb-4 md:mb-0">
            © Copyright CozyStay WordPress Theme for Hotel Booking.
          </div>
          <div className="flex space-x-4 items-center">
            <img
              src="https://www.svgrepo.com/show/303238/paypal-logo.svg"
              alt="PayPal"
              className="w-10"
            />
            <img
              src="https://www.svgrepo.com/show/304298/visa.svg"
              alt="Visa"
              className="w-10"
            />
            <img
              src="https://www.svgrepo.com/show/157845/mastercard.svg"
              alt="MasterCard"
              className="w-10"
            />
            <img
              src="https://www.svgrepo.com/show/354019/stripe.svg"
              alt="Stripe"
              className="w-10"
            />
          </div>
          <div className="flex space-x-4 text-gray-400 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterest />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default AboutUsSection;
