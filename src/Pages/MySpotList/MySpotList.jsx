import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AutthProvider";
import MySpot from "../MySpot/MySpot";
import { Typewriter } from "react-simple-typewriter";

const MySpotList = () => {
  const spots = useLoaderData();
  const { users } = useContext(AuthContext);
  const email = users?.email;
  const mySpot = spots.filter((spot) => spot.email == email);
  return (
    <div>
      <div
        className="hero h-[300px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/NrfDygN/jk-g-Jhev0-Yg-Uc-E-unsplash-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[600px]">
            <h1 className="mb-5 text-5xl font-bold leading-[60px]">Exploring the world, one <br /> <span className=" text-blue-400">
            <Typewriter
            words={['Adventure',]}
            loop={1000000000000}
            cursor
            cursorStyle='...'
            typeSpeed={140}
            deleteSpeed={50}
            delaySpeed={1000}
          />
                </span> at a time.</h1>
            
          </div>
        </div>
      </div>
      <div className=" max-w-[1440px] mx-auto mt-12 space-y-8">
        <h1 className=" text-4xl text-center  my-16 font-"><span className=" underline underline-offset-8">My Added </span><span className=" text-blue-400 font-pacifico">Tourist Spot</span></h1>
        {mySpot.map((spot) => (
          <MySpot key={spot._id} spot={spot}></MySpot>
        ))}
      </div>
    </div>
  );
};

export default MySpotList;
