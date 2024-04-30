const PopularCategory = () => {
  return (
    <div className=" cursor-pointer max-w-[1440px] mx-auto my-24 px-5">
      <div className=" max-w-3xl mx-auto text-center space-y-3">
        <h1 className=" md:text-4xl text-3xl lg:text-5xl font-semibold">Popular <span className=" text-blue-400">Category</span></h1>
        <p className=" text-base lg:text-lg">
          Explore the world through our carefully curated categories, designed
          to cater to every traveler's interests and preferences. Whether you're
          seeking adventure in the great outdoors.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div className=" border-[1px] card shadow-md h-[300px] transition-all transform hover:text-white hover:bg-blue-300 ">
          <figure className=" mt-10  p-6 mx-auto rounded-3xl rotate-45 bg-blue-100">
            <img
              src="https://i.ibb.co/hD5mdg7/backpack.png"
              className="w-16 rotate-[-45deg] h-16 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold text-xl">Adventure Tour</h2>
            <p>56+ Available Tour Place</p>
          </div>
        </div>
        <div className="border-[1px] card shadow-md h-[300px] transition-all transform hover:text-white hover:bg-blue-300 ">
          <figure className=" mt-10  p-6 mx-auto rounded-3xl rotate-45 bg-blue-100">
            <img
              src="https://i.ibb.co/RPvT2yK/travel-insurance-2.png"
              className="w-16 rotate-[-45deg] h-16 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold text-xl">Near City Tour</h2>
            <p>36+ Available Tour Place</p>
          </div>
        </div>
        <div className="border-[1px] card shadow-md h-[300px] transition-all transform hover:text-white hover:bg-blue-300 ">
          <figure className=" mt-10  p-6 mx-auto rounded-3xl rotate-45 bg-blue-100">
            <img
              src="https://i.ibb.co/gvytJ4b/beach-chair.png"
              className="w-16 rotate-[-45deg] h-16 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold text-xl">Beach Tour</h2>
            <p>26+ Available Tour Place</p>
          </div>
        </div>
        <div className="border-[1px] card shadow-md h-[300px] transition-all transform hover:text-white hover:bg-blue-300 ">
          <figure className=" mt-10  p-6 mx-auto rounded-3xl rotate-45 bg-blue-100">
            <img
              src="https://i.ibb.co/YPDSxD9/tent-1.png"
              className="w-16 rotate-[-45deg] h-16 "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-semibold text-xl">Wildlife Tour</h2>
            <p>46+ Available Tour Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
