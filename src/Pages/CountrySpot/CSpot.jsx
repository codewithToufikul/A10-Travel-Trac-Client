/* eslint-disable react/prop-types */
import { BiWorld } from "react-icons/bi";
import { FaRegCircleDot } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CSpot = ({ spot }) => {
  const {
    _id,
    // eslint-disable-next-line react/prop-types
    photo,
    spotName,
    location,
    cost,
    description,
    seasonality,
    country,
  } = spot;
  const sortDes = description.slice(0, 100);

  return (
    <div>
      <Link>
        <div className="card lg:flex-row flex-col  md:gap-3 card-side bg-base-100 border-[1px] shadow-xl">
          <figure className=" md:h-[300px] h-[250px] lg:h-[250px] w-full lg:w-[450px]">
            <img className=" w-full h-full rounded-2xl" src={photo} />
          </figure>
          <div className="md:m-4 m-2 md:flex-1">
            <h2 className="card-title text-3xl mt-4">{spotName}</h2>
            <div className="md:flex-row flex-col flex gap-3 md:gap-6 my-3">
              <p className=" flex items-center gap-1 text-base">
                <span className=" text-lg text-blue-600">
                  <HiOutlineLocationMarker />{" "}
                </span>
                {location}
                <span>{country}</span>
              </p>
              <p className=" flex items-center gap-1 text-base">
                <span className=" text-xl text-blue-600">
                  <TiWeatherPartlySunny />
                </span>
                <span className=" text-yellow-500  text-lg font-bold">
                  {seasonality}
                </span>
              </p>
            </div>
            <p className=" flex items-center gap-1 text-base">
              <span className=" text-xl text-blue-600">
                <BiWorld />
              </span>
              <span className=" text-cyan-600  text-lg font-bold">
                {country}
              </span>
            </p>
            <div className=" mt-2 max-w-[500px]">
              <p className=" flex gap-2 items-center">
                <span className=" md:mb-6 text-green-600">
                  <FaRegCircleDot />
                </span>
                <span>{sortDes}.....</span>
              </p>
            </div>
          </div>
          <div className="divider  divider-horizontal lg:py-5"></div>
          <div className=" lg:py-8  md:pr-9 lg:w-1/5">
            <div className="lg:mt-14 flex justify-center md:justify-end gap-2">
              <h2 className=" flex items-center gap-1 text-3xl font-semibold">
                {" "}
                <span className="text-lg">Average Cost:</span> ${cost}
              </h2>
            </div>
            <div className=" flex justify-end gap-3 p-5">
              <Link
                to={`/spotdetails/${_id}`}
                className=" btn bg-blue-400 text-lg text-white px-4"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CSpot;
