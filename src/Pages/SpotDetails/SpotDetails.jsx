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
        <div className=" lg:px-16 md:px-10 md:pb-8 pb-4   lg:pb-12 max-w-[1440px] mx-auto">
          <div className=" space-y-5 py-5 px-3 md:py-10">
            <h1 className=" text-4xl md:text-5xl ">{spotName}</h1>
            <p className=" flex items-center text-lg gap-1 md:text-2xl">
              <span className=" md:text-lg text-blue-600">
                <HiOutlineLocationMarker />{" "}
              </span>
              {location}
            </p>
          </div>
          <div className=" mx-auto h-[350px] lg:h-[600px]  max-w-[1000px]">
            <img
              className=" rounded-2xl border-2 shadow-2xl w-full h-full"
              src={photo}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mt-6 px-3 lg:px-8 mx-auto">
      <h1 className=" text-2xl md:text-3xl font-semibold">Overview</h1>
          <div className="divider  pr-5"></div>
      <div className=" grid   lg:grid-cols-6 ">
        <div className=" lg:col-span-4">
          
          <p className=" lg:text-xl max-w-[700px]">{description}</p>
        </div>
        <div className=" lg:col-span-2">
          <div className="card  bg-base-100 shadow-xl">
            <div className="card-body space-y-3">
              <h2 className="card-title lg:text-2xl"> Average Cost: <span className=" lg:text-3xl text-2xl text-blue-400">$ {cost}</span></h2>
              <h2 className=" flex lg:text-2xl items-center md:gap-1">For <span className=" lg:px-3 px-1 py-1 shadow-xl rounded-md text-lg text-blue-500 font-semibold  bg-white flex items-center gap-1"><span className=" text-xl"><IoMdTime /></span> {time}</span> tour <span className=" ml-3 text-red-400"> <PiAirplaneInFlightBold /></span></h2>
              <h2 className=" gap-2 flex items-center"><span className=" md:text-xl font-semibold">Country:</span> <span className=" lg:text-lg">{country}</span><span className="text-lg text-blue-400"><FaFlag /></span></h2>
              <p className=" flex items-center gap-1 md:text-lg"><span className=" text-xl text-blue-600"><TfiEye /> </span>Total visitors per year<span className=" text-red-500 font-bold">{visitors}</span></p>
              <p className=" flex items-center md:text-lg">This place is best for   <span className=" mx-2 text-2xl text-blue-500 "> {seasonality}</span> <TiWeatherPartlySunny className="text-blue-400" /></p>
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
