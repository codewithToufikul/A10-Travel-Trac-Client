import toast from "react-hot-toast";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MySpot = ({ spot }) => {
    // eslint-disable-next-line react/prop-types
    const {_id,photo, spotName, visitors,  location, cost,time} = spot;
    const handleDelete = () =>{
      fetch(`http://localhost:5000/spots/${_id}`,{
        method: 'DELETE'
      })
      .then(res=> res.json())
        .then(data=>{
          toast.success('successfully deleted')
          console.log(data);
        })
    }
  return (
    <tr>
    <td>
      <div className="flex  items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-16 h-16">
            <img src={photo} />
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">{spotName}</div>
          <div className="text-sm opacity-50">{location}</div>
        </div>
      </div>
    </td>
    <td>
    <p className=" justify-center w-[130px] px-3 py-1 border-blue-400 border-[1px] rounded-md text-lg text-blue-500 font-semibold  bg-white flex items-center gap-1"><span className=" text-xl"><IoMdTime /></span> {time}</p>
    </td>
    <td>
    <p className=" flex justify-center items-center gap-1 text-lg"><span className=" text-xl text-blue-600"><TfiEye /> </span><span className=" ">{visitors}</span></p>
    </td>
    <td>
    <div className=" justify-center flex items-center gap-2">
            <h2 className="  text-2xl font-semibold">${cost}</h2>
            </div>
    </td>
    <td>
    <div className=" flex gap-2 justify-center ">
                <Link to={`/updatespot/${_id}`} className=" btn bg-blue-400 text-lg text-white px-4">Update <span><RxUpdate /></span></Link>
                <button onClick={()=>handleDelete(spot)} className=" btn  bg-red-500 text-lg text-white px-6"> <FaDeleteLeft /></button>
            </div>
    </td>
    
  </tr>
  );
};

export default MySpot;
