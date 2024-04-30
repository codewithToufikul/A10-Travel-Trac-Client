import HomeSpot from "../HomeSpot/HomeSpot";

const TouristSpots = ({spots}) => {
    const showingSpot = spots.slice(0, 6);
  return (
    <div
      className=" mt-20 py-9"
      style={{
        backgroundImage: 'url("https://i.ibb.co/85B7TKx/H1-png-1.png")',
      }}
    >
      <div className=" max-w-[1440px] px-2 mx-auto">
        <div className=" max-w-[800px] text-center mx-auto space-y-3 lg:space-y-8">
          <h1 className=" md:text-4xl text-3xl lg:text-6xl">
            Tourist <span className=" font-pacifico text-blue-400">Spots</span>
          </h1>
          <p>
            Explore the hidden gems and iconic landmarks that make our
            destination unforgettable. From breathtaking natural wonders to
            cultural marvels, our tourist.
          </p>
        </div>
        <div className=" mt-10 md:grid-cols-2 grid-cols-1 grid gap-8 lg:grid-cols-3">
         {
            showingSpot.map(spot => <HomeSpot key={spot._id} spot={spot}></HomeSpot>)
         }
        </div>
      </div>
    </div>
  );
};

export default TouristSpots;
