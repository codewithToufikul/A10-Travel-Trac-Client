import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import bg from '../../assets/bg.svg'
import CSpot from "./CSpot";

const CountrySpot = () => {
  const [allSpot, setAllSpot] = useState([]);
  const country = useLoaderData();
  const { country_name } = country;
  useEffect(() => {
    fetch("https://travel-trac-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        setAllSpot(data);
      });
  }, []);

  const countrySpot = allSpot.filter((spot) => spot.country == country_name);
  return (
    <div>
      <div
        className="hero h-52 lg:h-96"
        style={{
          backgroundImage: "url(https://i.ibb.co/GRWB7fm/pithorgarh-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 md:text-4xl text-3xl lg:text-6xl  font-bold">
              <span className=" text-blue-400">
                <Typewriter
                  words={[country_name]}
                  loop={1000000000000}
                  cursor
                  cursorStyle="..."
                  typeSpeed={180}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
      <h1 className=" mt-7  lg:mt-16 md:text-4xl text-3xl lg:text-5xl text-center font-semibold">{country_name} <span className=" font-pacifico font-extralight text-blue-400">Tourist</span> Spots</h1>
      <div style={{
          backgroundImage: `url(${bg})`,
        }} className=" md:space-y-8 space-y-4 px-2 md:p-10  bg max-w-[1440px] mx-auto mt-7"  >
            {
                countrySpot.map(spot=> <CSpot key={spot._id} spot={spot}></CSpot>)
            }

      </div>
    </div>
  );
};

export default CountrySpot;
