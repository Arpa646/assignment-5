import React from "react";
// Import the footer background image

import tiktok from "./tiktok.svg";
import insta from "./insta.svg";
import Linkin from "./Linkin.svg";
import heart from "./heart.svg";

function Footer() {
  return (
    <footer
    // Set the background image here
    >
      <div className="w-[1000px]  mx-auto py-16">
        <div className="bg-white  rounded-3xl shadow-lg p-10">
          <div className="flex flex-col  h-[208px]  lg:flex-row justify-between items-center lg:items-start">
            {/* Left Section */}
            <div className="flex space-y-6 flex-col items-center w-[300px] lg:items-start">
              <div className="flex items-center space-x-2">
                <h3 className="mt-1   text-[30px] font-bold">
                  <img
                    src="https://www.fasterui.com/wp-content/uploads/2020/08/Group-15.png"
                    alt="Logo"
                    className="w-[1px] sm:w-[150px] lg:w-[187px]"
                  />
                </h3>
              </div>
              <p className="text-[#8987A1] text-center lg:text-left">
                Ready to elevate your online presence? Contact us today to
                discuss your project and discover how we can bring your vision
                to life.
              </p>
              <p className="text-sm text-[#8987A1] flex ">
                <img src={`${heart}`} className="me-2" alt="" /> Made with
                powered by
                <a href="https://inkyy.com" className="text-indigo-500 ms-2">
                  inkyy.com
                </a>
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col space-y-20 items-center justify-between  lg:space-x-28 mt-6 lg:mt-0">
              {/* Navigation Links */}
              <div className="space-x-4 mt-12   text-gray-500">
                <a href="#" className="hover:text-indigo-600">
                  Home
                </a>
                <a href="#" className="hover:text-indigo-600">
                  About
                </a>
                <a href="#" className="hover:text-indigo-600">
                  How it Works
                </a>
                <a href="#" className="hover:text-indigo-600">
                  Services
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#">
                  <img
                    src={`${tiktok}`}
                    alt="Instagram"
                    className="h-6 w-6 hover:opacity-80"
                  />
                </a>
                <a href="#">
                  <img
                    src={`${insta}`}
                    alt="LinkedIn"
                    className="h-6 w-6 hover:opacity-80"
                  />
                </a>
                <a href="#">
                  <img
                    src={`${Linkin}`}
                    alt="TikTok"
                    className="h-6 w-6 hover:opacity-80"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
