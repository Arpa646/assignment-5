function Banner() {
  return (
    <div className="items-center">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section - Getting Here */}
        <div
          className="relative w-full md:w-1/2 h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1671269943553-3781c823e625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbSUyMHdhbGx8ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
            <h3 className="text-sm uppercase text-gray-400 mb-2">
              Our Location
            </h3>
            <h2 className="text-4xl text-white font-semibold mb-4">
              Getting Here
            </h2>
            <p className="text-gray-300 mb-6">
              CozyStay Aparthotel Times Square
              <br />
              415 6th Avenue, New York, New York, USA, 10018
              <br />
              Tel: +1 212-555-6699
              <br />
              Email: information@cozystay.com
            </p>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">
              Get Directions
            </button>
          </div>
        </div>

        {/* Right Section - Spend Your Time With Us */}
        <div
          className="relative w-full md:w-1/2 h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1675616575351-8814fc2cfdda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb20lMjB3YWxsfGVufDB8fDB8fHww')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center">
            <h3 className="text-sm uppercase text-gray-400 mb-2">
              Book a Room
            </h3>
            <h2 className="text-4xl text-white font-semibold mb-4">
              Spend Your Time With Us
            </h2>
            <p className="text-gray-300 mb-6">
              Everything at CozyStay, in its restaurants, bar, and spa is
              designed to make your stay, lunch or dinner unforgettable.
              <br />
              Tel: +1 212-555-6688
              <br />
              Email: reservation@cozystay.com
            </p>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">
              Reserve Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
