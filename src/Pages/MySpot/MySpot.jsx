import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySpot = ({ spot, setSpots, spots }) => {
    const {_id,photo, spotName, visitors,  location, cost,time, country} = spot;
    const handleDelete = (_id) =>{
      console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
          if(result.isConfirmed){
            fetch(`https://travel-trac-server.vercel.app/spots/${_id}`,{
              method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
              console.log(data);
              if(data.deletedCount > 0){
                Swal.fire(
                  'Deleted!',
                  'Your Coffee has been deleted.',
                  'success'
              )
              const remaining = spots.filter(spot=> spot._id !== _id);
              setSpots(remaining)
              }
            })
          }
        })
 

    }
  return (
    <tr>
    <td>
      <div className="flex  items-center gap-3">
        <div className="avatar lg:block hidden">
          <div className="mask mask-squircle w-16 h-16">
            <img src={photo} />
          </div>
        </div>
        <div>
          <div className="lg:font-bold lg:text-lg ">{spotName}</div>
          <p className="text-sm opacity-50 lg:block hidden">{location} <span>{country}</span>  </p>
        </div>
      </div>
    </td>
    <td>
    <p className=" justify-center lg:w-[130px] lg:px-3 py-1 border-blue-400 border-[1px] rounded-md lg:text-lg text-blue-500 font-semibold  bg-white dark:text-black flex items-center gap-1"><span className=" text-xl"><IoMdTime /></span> {time}</p>
    </td>
    <td>
    <p className=" flex justify-center items-center gap-1 lg:text-lg"><span className=" lg:text-xl text-blue-600"><TfiEye /> </span><span className=" ">{visitors}</span></p>
    </td>
    <td>
    <div className=" justify-center flex items-center gap-2">
            <h2 className=" text-xl lg:text-2xl font-semibold">${cost}</h2>
            </div>
    </td>
    <td>
    <div className=" flex gap-2 justify-center ">
                <Link to={`/updatespot/${_id}`} className=" btn bg-blue-400 text-lg text-white  px-4"><span className="lg:block hidden">Update</span> <span><RxUpdate /></span></Link>
                <button onClick={()=>handleDelete(_id)} className=" btn  bg-red-500 text-lg text-white lg:px-6"> <FaDeleteLeft /></button>
            </div>
    </td>
    
  </tr>
  );
};

export default MySpot;
