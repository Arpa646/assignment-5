import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import "@/App.css";
const Footer = () => {
  return (
    <footer className="text-black p-9 mt-11">
      <div
        style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: "17px",
          fontWeight: 400,
          color: "rgb(34, 66, 41)",
        }}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
      >
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">FACILITY</h3>
          <hr />
          <ul className="text-slate-500 space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Membership
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Facility Rentals
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Community Events
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">SUPPORT</h3>
          <ul className="text-slate-500 space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                Help + FAQs
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Booking Support
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Facility Guidelines
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">
            SPORTS TIPS & NEWS
          </h3>
          <ul className="text-slate-500 space-y-3">
            <li className="my-2">
              <a href="#" className="hover:underline">
                Training Tips
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Facility News
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Events Calendar
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Meet Our Coaches
              </a>
            </li>
            <li className="my-2">
              <a href="#" className="hover:underline">
                Contact Our Team
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="border-b-2 border-white pb-2 mb-4">STAY CONNECTED</h3>
          <p className="mb-4 text-slate-500">
            Stay updated with our latest offers, sports tips, and facility news.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 rounded-none border border-black"
          />
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-black hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-red-500">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="triangle-container">
          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
