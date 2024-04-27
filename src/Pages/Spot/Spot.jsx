import { IoMdTime } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Spot = ({spot}) => {
    // eslint-disable-next-line react/prop-types
    const {photo, spotName, time} = spot;
    console.log(spot);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure >
        <img
          src={photo}
        />
        
      </figure>
      <div className="card-body relative">
      <p className=" top-[-30px] left-4 m-2 absolute px-3 py-1 border-blue-400 border-2 rounded-md text-lg text-blue-500 font-semibold  bg-white flex items-center gap-1"><span className=" text-xl"><IoMdTime /></span> {time}</p>
        <h2 className="card-title text-3xl">{spotName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Spot;
