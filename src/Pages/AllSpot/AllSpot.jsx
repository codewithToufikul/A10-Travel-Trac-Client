import { RiArrowUpDownLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import Spot from "../Spot/Spot";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";

const AllSpot = () => {
    const [spots, setSpots] = useState([])
    const spot = useLoaderData();
    useEffect(()=>{ 
    setSpots(spot)
    },[])
    const handleAverageCostdes = () =>{
        const sortSpot = [...spot].sort((a, b)=> a.cost-b.cost)
        setSpots(sortSpot)
    }
    const handleAverageCostAss = () =>{
        const sortSpot = [...spot].sort((a, b)=> b.cost-a.cost)
        setSpots(sortSpot)
    }
    const handleAll = () =>{
        setSpots(spot);
    }
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
              <span className=" text-blue-400">

              <Typewriter
            words={['Destination',]}
            loop={1000000000000}
            cursor
            cursorStyle='...'
            typeSpeed={140}
            deleteSpeed={50}
            delaySpeed={1000}
          />
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-12">
        <div className=" mb-10">
            <h1 className=" text-5xl  text-center font-pacifico">Tourist <span className="text-blue-300">Spot</span></h1>
        </div>
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
              <li onClick={handleAll}>
                <a className=" text-lg">All</a>
              </li>
              <li onClick={handleAverageCostdes}>
              <a className=" flex items-center gap-1 text-lg">Average Cost <span><FaArrowDownShortWide /></span></a>
              </li>
              <li >
                <a onClick={handleAverageCostAss} className=" flex items-center gap-1 text-lg">Average Cost <span><FaArrowDownWideShort /></span></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div> 
        <div className=" grid lg: grid-cols-3 gap-10 mx-5">
            {
                spots.length > 0 ? spots.map(spot=> <Spot key={spot.li_id} spot={spot}></Spot>) : <h1 className=" text-5xl text-center text-red-400">No Spot For Tour !</h1>
            }
        </div>
      </div>
    </div>
  );
};

export default AllSpot;
