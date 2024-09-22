const activities = [
  {
    image:
      "https://images.unsplash.com/photo-1592632789004-57d4354f2499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzfGVufDB8fDB8fHww",
    caption: "Horse Riding Valley Tour",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590502148726-931b4b16b63a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Self-guided Walking Tours",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595838788874-a9dbc04f3d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Perfect Picnic Settings & Spots",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616500156885-e51d834cab8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Blueberry Picking Experience",
  },
];

function ServicesOverview() {
  return (
    <div>
      <div className="space-y-6 mt-20 text-center lg:w-2/4   w-full    mx-auto ">
        <div>
          <p className="uppercase">Welcome to CozyStay Lodge</p>
        </div>
        <div>
          <h1 className="text-3xl">
            Exceptional Chalets, tailored services and <br /> the experience of
            unique holidays
          </h1>
        </div>
        <div>
          <div>
            <p className="lg:w-3/4 w-full  text-center mx-auto ">
              Welcome to CozyStay Lodge, where luxury meets action. Nestled in
              the heart of adventure, our exceptional hotels and chalets form a
              harmonious and energetic environment for sports enthusiasts. Each
              room is unique, offering vibrant décor, sleek athletic touches,
              and modern comforts. Whether you're unwinding after a day of golf,
              skiing, or cycling, our cozy retreats provide the perfect balance
              of relaxation and excitement.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-8">
        {/* Explore our story button */}
        <button className="bg-[#A18549] text-white px-6 py-2 rounded mb-8  ">
          Explore Our Story
        </button>

        {/* First row */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl mb-12 relative">
          {/* Image 1 */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={activities[0].image}
              alt={activities[0].caption}
              className="mx-auto shadow-md"
            />
            <p className="text-sm mt-2 text-center">{activities[0].caption}</p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block h-[600px] mt-[-300px] w-px bg-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>

          {/* Headline */}
          <h2 className="text-2xl absolute md:static w-full md:w-auto mt-4 md:mt-96 text-center font-serif">
            Wonderful Countryside <br /> Activities & Great <br /> Experiences
          </h2>

          {/* Image 2 */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={activities[1].image}
              alt={activities[1].caption}
              className="mt-20 md:mt-72 mx-auto shadow-md"
            />
            <p className="text-sm mt-2 text-center">{activities[1].caption}</p>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl relative">
          {/* Image 3 */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={activities[2].image}
              alt={activities[2].caption}
              className="mt-6 md:mt-0 mx-auto shadow-md"
            />
            <p className="text-sm mt-2 text-center">{activities[2].caption}</p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block h-[850px] -mt-64 w-px bg-gray-300 absolute left-1/2 transform -translate-x-1/2"></div>

          {/* Image 4 */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={activities[3].image}
              alt={activities[3].caption}
              className="mt-6 md:mt-0 mx-auto shadow-md"
            />
            <p className="text-sm mt-2 text-center">{activities[3].caption}</p>
          </div>
        </div>

        {/* Explore more button */}
        <button className="bg-[#A18549] text-white px-6 py-2 rounded mt-8  ">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ServicesOverview;
