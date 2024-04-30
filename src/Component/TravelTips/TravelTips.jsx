import { FaRegUserCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const TravelTips = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <div className=" text-center space-y-3">
        <h1 className=" font-semibold lg:text-5xl md:text-4xl text-3xl">
          Travel Tips And Advice
        </h1>
      </div>
      <div className=" mt-16 gap-5 lg:flex-row flex-col lg:px-0 md:px-9 flex">
        <div className="flex lg:flex-row flex-col ">
          <figure className=" lg:w-[350px] h-[350px]">
            <img
            className=" rounded-xl w-full h-full"
              src="https://i.ibb.co/ScdnC75/philipp-kammerer-6-Mxb-m-Z-Q8-E-unsplash.jpg"
            />
          </figure>
          <div className=" pl-2 lg:w-1/2">
            <div className=" flex gap-10">
            <h2 className="card-title"><span><FaRegUserCircle /></span> Admin</h2>
            <p className=" flex items-center  text-lg gap-2"><span><SlCalender /></span> March 1, 2024</p>
            </div>
            <h1 className=" text-2xl mt-5 font-semibold">How To Travel With Paper Map</h1>
            <p className=" text-base">Traveling with a paper map can be a nostalgic and practical experience, ensuring you always have a reliable backup, especially when venturing off the beaten path or into areas with limited connectivity. Here are some tips for traveling with a paper map...</p>
            <button className=" mx-4 mt-2 btn btn-outline"> Read More>></button>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col gap-2">
          <figure className=" lg:w-[350px] h-[350px]">
            <img
            className=" rounded-xl w-full h-full"
              src="https://i.ibb.co/GR55sH8/spencer-davis-0-Qc-Sn-CM0a-Mc-unsplash-1.jpg"
            />
          </figure>
          <div className="  lg:w-1/2 p-2">
            <div className=" flex gap-10">
            <h2 className="card-title"><span><FaRegUserCircle /></span> Admin</h2>
            <p className=" flex items-center  text-lg gap-2"><span><SlCalender /></span> April 7, 2024</p>
            </div>
            <h1 className=" text-2xl mt-5 font-semibold">Pack Wisely Before Traveling</h1>
            <p>Packing wisely before embarking on a journey is akin to laying the groundwork for a seamless adventure. It's a process that demands forethought and consideration, ensuring that every item in your suitcase serves a purpose...</p>
            <button className=" mx-4 mt-2 btn btn-outline"> Read More>></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
