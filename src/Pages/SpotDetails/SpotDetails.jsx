import { FaFlag } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { PiAirplaneInFlightBold } from "react-icons/pi";
import { TfiEye } from "react-icons/tfi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {
    spotName,
    time,
    location,
    visitors,
    seasonality,
    cost,
    country,
    description,
    photo,
  } = spot;
  return (
    <div className="">
      <div className=" bg-blue-50">
        <div className=" px-16 pb-12 max-w-[1440px] mx-auto">
          <div className=" space-y-5 py-10">
            <h1 className=" text-5xl ">{spotName}</h1>
            <p className=" flex items-center gap-1 text-2xl">
              <span className=" text-lg text-blue-600">
                <HiOutlineLocationMarker />{" "}
              </span>
              {location}
            </p>
          </div>
          <div className=" mx-auto h-[600px]  max-w-[1000px]">
            <img
              className=" rounded-2xl border-2 shadow-2xl w-full h-full"
              src={photo}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mt-6 px-8 mx-auto">
      <h1 className=" text-3xl font-semibold">Overview</h1>
          <div className="divider  pr-5"></div>
      <div className=" grid   grid-cols-6 ">
        <div className=" col-span-4">
          
          <p className=" text-xl max-w-[700px]">{description}</p>
        </div>
        <div className=" col-span-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body space-y-3">
              <h2 className="card-title text-2xl"> Average Cost: <span className=" text-3xl text-blue-400">$ {cost}</span></h2>
              <h2 className=" flex text-2xl items-center gap-1">For <span className=" px-3 py-1 shadow-xl rounded-md text-lg text-blue-500 font-semibold  bg-white flex items-center gap-1"><span className=" text-xl"><IoMdTime /></span> {time}</span> tour <span className=" ml-3 text-red-400"> <PiAirplaneInFlightBold /></span></h2>
              <h2 className=" gap-2 flex items-center"><span className=" text-xl font-semibold">Country:</span> <span className=" text-lg">{country}</span><span className="text-lg text-blue-400"><FaFlag /></span></h2>
              <p className=" flex items-center gap-1 text-lg"><span className=" text-xl text-blue-600"><TfiEye /> </span>Total visitors per year<span className=" text-red-500 font-bold">{visitors}</span></p>
              <p className=" flex items-center text-lg">This place is best for   <span className=" mx-2 text-2xl text-blue-500 "> {seasonality}</span> <TiWeatherPartlySunny className="text-blue-400" /></p>
              <div className="card-actions">
              <button className="btn w-full bg-blue-400 text-lg text-white">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SpotDetails;
