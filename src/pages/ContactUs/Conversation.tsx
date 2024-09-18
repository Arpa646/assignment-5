  

function Conversation() {
  return (
    <div
      style={{ backgroundColor: "#151719" }}
      className=" min-h-screen   bg-transparenttext-white p-8"
    >
      {/* Left - Contact Form */}
      <div
        style={{ backgroundColor: "#151719" }}
        className=" w-3/4  mx-auto    flex flex-col lg:flex-row justify-between items-center"
      >
        <div
          style={{ border: "1px solid #AA8B5F" }}
          className=" w-2/4 p-8 shadow-lg"
        >
          <h2 className="text-lg text-gray-400 mb-4">Have any questions?</h2>
          <h1 className="text-3xl text-gray-400 font-semibold mb-4">
            Let's start a conversation
          </h1>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <input
                style={{ border: "1px solid #AA8B5F" }}
                type="text"
                id="name"
                className="w-full p-3       bg-transparent   placeholder-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                style={{ border: "1px solid #AA8B5F" }}
                type="email"
                id="email"
                className="w-full p-3       bg-transparent  placeholder-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                style={{ border: "1px solid #AA8B5F" }}
                id="message"
                className="w-full p-3 h-32       bg-transparent  placeholder-gray-400 focus:outline-none focus:border-gray-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              style={{ backgroundColor: " #AA8B5F" }}
              className="bg-yellow-600 w-full p-3  hover:bg-yellow-700 transition duration-300"
            >
              Send Your Message
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className=" w-full p-8">
          <img
            src="https://plus.unsplash.com/premium_photo-1671269943553-3781c823e625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMHdhbGx8ZW58MHx8MHx8fDA%3D"
            alt="Apartment Interior"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
