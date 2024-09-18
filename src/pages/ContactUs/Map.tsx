import React from "react";

function Conversation() {
  return (
    <div className=" min-h-screen  bg-black text-white p-8">
      {/* Left - Contact Form */}
      <div class=" w-3/4  mx-auto     flex flex-col lg:flex-row-reverse justify-between items-center">
        <div
          style={{ border: "1px solid #AA8B5F" }}
          className=" text-center w-[400px] p-8 bg-black  shadow-lg"
        >
          <h2 className="text-lg text-gray-400 mb-4">Reservation</h2>

          <div className="w-full  p-8 bg-black shadow-lg">
            <h1
              style={{ color: " #AA8B5F" }}
              className="text-2xl font-medium mb-4"
            >
              Direct Reservations
            </h1>
            <div className="mb-6">
              <p className="text-gray-500">Email: reservations@cozystay.com</p>
              <p className="text-gray-500">Reservations Fax: 1.212.555-5555</p>
              <p className="text-gray-500">Call: +1 212-555-6688</p>
            </div>

            <h2
              style={{ color: " #AA8B5F" }}
              className="text-2xl font-light mb-4"
            >
              Hotel Address
            </h2>
            <div className="mb-6">
              <p className="text-gray-500">CozyStay City Apartments</p>
              <p className="text-gray-500">1250 West 6th Ave,</p>
              <p className="text-gray-500">New York, NY 10036,</p>
              <p className="text-gray-500">United States</p>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Pinterest
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                YouTube
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full p-8 h-[600px]">
          <div className="w-full h-full">
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9781721389297!2d-74.00594168459642!3d40.71277577933112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19a1f2b51d%3A0xb0f2b02c7f65b2b0!2sCozyStay%20City%20Apartments!5e0!3m2!1sen!2sus!4v1600205274327!5m2!1sen!2sus"
              className="w-full h-full border-none"
              allowFullScreen=""
              aria-hidden="false"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
