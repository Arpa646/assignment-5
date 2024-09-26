import React, { useState } from "react";
import logo2 from "./logo2.png";
function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="        flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg px-8   rounded-lg">
        <h1 className="text-4xl  font-bold text-center mb-8 font-raleway">
          Let's Get in Touch
        </h1>
      


        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="space-y-1">
            <label
              style={{ fontSize: "18px" }}
              htmlFor="email"
              className="block   text-start text-lg font-semibold text-gray-700"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#D6DDED]  bg-transparent  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="space-y-1  ">
            <label
              style={{ fontSize: "18px" }}
              htmlFor="name"
              className="block text-start text-lg   font-semibold text-gray-700"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="full name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#D6DDED]  bg-transparent  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              style={{ fontSize: "18px" }}
              htmlFor="message"
              className="block  text-start text-lg font-semibold text-gray-700"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="write your message...."
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#D6DDED]  bg-transparent  bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#4E47FF] text-white text-lg  rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
