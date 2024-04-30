import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateSpot = () => {
    const spot = useLoaderData();
    const {_id,description,country, photo, spotName, time, location, visitors,seasonality, cost} = spot;
    const navigate = useNavigate()
    const handleUpdateSpot =event =>{
        event.preventDefault()
    const form = event.target;
    const spotName = form.spotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;
    const touristSpot = {
      spotName: spotName,
      country: country,
      location: location,
      description: description,
      cost: cost,
      seasonality: seasonality,
      time: time,
      visitors: visitors,
      photo: photo,
    }
    fetch(`https://travel-trac-server.vercel.app/spots/${_id}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(touristSpot)
    })
    .then(res => res.json())
    .then(data=> {
      navigate('/mylist')
        toast.success('update success')
        console.log(data)
    })
}
    return (
        <div className=" max-w-[1440px] mx-auto">
            <div className="bg-green-50 lg:px-24 px-8 py-16 rounded-2xl">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-5">
          Update Your<span className=" text-blue-400">Tourist</span> Spot
        </h2>
        <form onSubmit={handleUpdateSpot}>

          <div className="md:flex md:mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base">Tourist Spot Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="spotName"
                  required
                  defaultValue={spotName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  required
                  defaultValue={location}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base">Country Name</span>
              </label>
              <select name="country" defaultValue={country} required className="select select-bordered w-full">
                <option disabled selected>
                  Select Country
                </option>
                <option>Bangladesh</option>
                <option>Thailand</option>
                <option>Indonesia</option>
                <option>Malaysia</option>
                <option>Vietnam</option>
                <option>Cambodia</option>
              </select>
            </div>
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Average Cost</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="cost"
                  required
                  defaultValue={cost}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base">Seasonality</span>
              </label>
              <select name="seasonality" defaultValue={seasonality} required className="select select-bordered w-full ">
                <option disabled selected>
                  seasonality
                </option>
                <option>summer</option>
                <option>winter</option>
              </select>
            </div>
          </div>
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Travel Time</span>
              </label>
              <select name="time" required defaultValue={time} className="select select-bordered w-full ">
                <option disabled selected>
                  Travel Time
                </option>
                <option>3 days</option>
                <option>7 days</option>

                <option>15 days</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base">
                  Tota Visitors Per Year
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="visitors"
                  required
                  defaultValue={visitors}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>      
          <div className=" mb-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="photo"
                  required
                  defaultValue={photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-base">Short Description</span>
              </label>
              <label className="input-group">
              <textarea
              type="text"
              required
              name="description"
              defaultValue={description}
               className="textarea textarea-bordered  w-full" ></textarea>
              </label>
            </div>
          <input
            type="submit"
            value="Update Spot"
            className="btn btn-block bg-blue-400 text-lg text-white"
          />
        </form>
      </div>
        </div>
    );
};

export default UpdateSpot;