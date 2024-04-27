import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { TfiEye } from "react-icons/tfi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Spot = ({spot}) => {
    // eslint-disable-next-line react/prop-types
    const {photo, spotName, time, location, visitors,seasonality, cost} = spot;
  return (
    <Link>
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure  className=" h-[250px]">
        <img
        className=" h-full w-full"
          src={photo}
        />
        
      </figure>
      <div className="card-body relative">
      <p className=" top-[-30px] left-4 m-2 absolute px-3 py-1 border-blue-400 border-2 rounded-md text-lg text-blue-500 font-semibold  bg-white flex items-center gap-1"><span className=" text-xl"><IoMdTime /></span> {time}</p>

        <h2 className="card-title text-3xl mt-4">{spotName}</h2>
        <div className=" flex mb-3">
        <p className=" flex items-center gap-1 text-base"><span className=" text-lg text-blue-600"><HiOutlineLocationMarker /> </span>{location}</p>
        <p className=" flex items-center gap-1 text-base"><span className=" text-xl text-blue-600"><TiWeatherPartlySunny /></span><span className=" text-yellow-500  text-lg font-bold">{seasonality}</span></p>
        </div>
        <p className=" flex items-center gap-1 text-base"><span className=" text-xl text-blue-600"><TfiEye /> </span><span className=" text-red-500 font-bold">{visitors}</span>visitors per year</p>
        <div className="divider mt-2"></div> 
        <div className="card-actions justify-between items-center">
            <div className=" flex items-center gap-2">
            <p className=" text-lg">Cost:</p>
            <h2 className=" text-3xl font-semibold">${cost}</h2>
            </div>
          <button className="btn bg-blue-400 text-base text-white">Details</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Spot;
