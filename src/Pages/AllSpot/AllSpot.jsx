import { RiArrowUpDownLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import Spot from "../Spot/Spot";
import { useEffect, useState } from "react";

const AllSpot = () => {
    const [spots, setSpots] = useState([])
    const spot = useLoaderData();
    useEffect(()=>{ 
    setSpots(spot)
    },[spot])
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3T3C0y4/alexander-london-i-YCCDz049-U8-unsplash-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-6xl  font-bold">
              Choose Your Perfect{" "}
              <span className=" text-blue-400">Destination</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-10">
        <div className=" flex justify-between items-center px-4">
          <h1 className=" text-4xl">{spots.length} Tour Spot found</h1>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" text-lg hover:text-black hover:bg-white btn-outline flex items-center gap-2  m-1">
              Sort By <span><RiArrowUpDownLine /></span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Average Cost $</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div> 
        <div>-
            {
                spots.length > 0 ? spots.map(spot=> <Spot key={spot.li_id} spot={spot}></Spot>) : <h1 className=" text-5xl text-center text-red-400">No Spot For Tour !</h1>
            }
        </div>
      </div>
    </div>
  );
};

export default AllSpot;
