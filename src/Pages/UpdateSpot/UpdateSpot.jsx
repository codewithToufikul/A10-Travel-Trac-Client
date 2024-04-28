import { useLoaderData } from "react-router-dom";

const UpdateSpot = () => {
    const spot = useLoaderData()
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
    fetch(`http://localhost:3000/users/${spot._id}`,{
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(touristSpot)
    })
    .then(res => res.json())
    .then(data=> console.log(data))
}
    return (
        <div className=" max-w-[1440px] mx-auto">
            <div className="bg-blue-50 lg:px-24 px-8 py-16 rounded-2xl">
        <h2 className="text-4xl font-extrabold text-center mb-5">
          Add a <span className=" text-blue-400">Tourist</span> Spot
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
                  placeholder="tourist spot name"
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
                  placeholder="location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base">Country Name</span>
              </label>
              <select name="country" required className="select select-bordered w-full">
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
          {/* form supplier row */}
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
                  placeholder=" average cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text text-base">Seasonality</span>
              </label>
              <select name="seasonality" required className="select select-bordered w-full ">
                <option disabled selected>
                  seasonality
                </option>
                <option>summer</option>
                <option>winter</option>
              </select>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Travel Time</span>
              </label>
              <select name="time" required className="select select-bordered w-full ">
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
                  placeholder="visitors number"
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
                  placeholder="photo url"
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
              placeholder="short description "
               className="textarea textarea-bordered  w-full" ></textarea>
              </label>
            </div>
          <input
            type="submit"
            value="Add Spot"
            className="btn btn-block bg-blue-400 text-lg text-white"
          />
        </form>
      </div>
        </div>
    );
};

export default UpdateSpot;