import { FaRegCircleDot } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MySpot = ({ spot }) => {
    // eslint-disable-next-line react/prop-types
    const {_id,photo, spotName,  location, seasonality, cost, description} = spot;
    // eslint-disable-next-line react/prop-types
    const sortDes = description.slice(0, 110)
    // const handleSpotUpdate = (id) =>{
    //   fetch(`http://localhost:5000/spots/${id}`,{
    //     method: 'PUT'
    //   })
    // }
  return (
    <div>
      <Link>
        <div className="card  gap-3 card-side bg-base-100 border-[1px] shadow-xl">
          <figure className="  h-[250px] w-[450px]">
            <img
            className=" w-full h-full rounded-2xl"
              src={photo}
              
            />
          </figure>
          <div className="m-4 flex-1">
          <h2 className="card-title text-3xl mt-4">{spotName}</h2>
          <div className=" flex gap-6 my-3">
        <p className=" flex items-center gap-1 text-base"><span className=" text-lg text-blue-600"><HiOutlineLocationMarker /> </span>{location}</p>
        <p className=" flex items-center gap-1 text-base"><span className=" text-xl text-blue-600"><TiWeatherPartlySunny /></span><span className=" text-yellow-500  text-lg font-bold">{seasonality}</span></p>
        
        </div>
            <div className=" mt-5 max-w-[500px]">
            <p className=" flex gap-2 items-center">
                <span className=" mb-6 text-green-600"><FaRegCircleDot /></span>
                <span>{sortDes}.....</span>
            </p>
            </div>
          </div>
          <div className="divider divider-horizontal py-5"></div>
          <div className="  w-1/5"> 
          <div className="mt-14 p-6 flex justify-end gap-2">
            <h2 className=" text-3xl font-semibold">${cost}</h2>
            </div>
            <div className=" flex justify-end gap-3 p-5">
                <Link to={`/updatespot/${_id}`} className=" btn bg-blue-400 text-lg text-white px-4">Update</Link>
                <button className=" btn bg-red-500 text-lg text-white px-4">Delete</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MySpot;
