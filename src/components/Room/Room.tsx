const Room = () => {
  return (
    <div className="mt-[70px] relative h-[600px]">
      {/* Backgrounds */}
      {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-[#3a3138] z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#e9e6e9] z-10"></div> */}

      {/* Cards Container */}

      <div
        className="relative h-20 top-9 z-20 flex justify-center items-center mb-1
  "
      >
        <h1 className="text-2xl  md:text-1xl lg:text-5xl text-black font-bold">
          Room & Suits
        </h1>
      </div>
      <div className="relative h-full z-20 flex flex-wrap justify-center items-center gap-4 p-4">
        {/* Card 1 */}

        <div className="bg-white shadow-lg rounded-lg w-[300px] h-[400px] flex flex-col">
          <div className="flex-1 bg-[url('https://hotello.stylemixthemes.com/esperanza/wp-content/uploads/sites/6/2018/07/Fotolia_127442110_Subscription_Monthly_XXL-370x210.jpg')] bg-cover bg-center rounded-t-lg"></div>
          <div className="flex-1 flex justify-center items-center bg-[#ffffff] rounded-b-lg text-white text-center p-4">
            <h1 className="text-2xl">Room 1</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg w-[300px] h-[400px] flex flex-col">
          <div className="flex-1 bg-[url('https://hotello.stylemixthemes.com/esperanza/wp-content/uploads/sites/6/2018/07/Fotolia_127442110_Subscription_Monthly_XXL-370x210.jpg')] bg-cover bg-center rounded-t-lg"></div>
          <div className="flex-1 flex justify-center items-center bg-[#ffffff] rounded-b-lg text-white text-center p-4">
            <h1 className="text-2xl">Room 2</h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg w-[300px] h-[400px] flex flex-col">
          <div className="flex-1 bg-[url('https://hotello.stylemixthemes.com/esperanza/wp-content/uploads/sites/6/2018/07/Fotolia_127442110_Subscription_Monthly_XXL-370x210.jpg')] bg-cover bg-center rounded-t-lg"></div>
          <div className="flex-1 flex justify-center items-center bg-[#ffffff] rounded-b-lg text-white text-center p-4">
            <h1 className="text-2xl">Room 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
