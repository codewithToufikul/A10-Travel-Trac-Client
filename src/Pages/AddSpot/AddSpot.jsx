const AddSpot = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-blue-50 px-24 py-16 rounded-2xl">
        <h2 className="text-4xl font-extrabold text-center mb-5">
          Add a <span className=" text-blue-400">Tourist</span> Spot
        </h2>
        <form>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Tourist Spot Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="tourist spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-base">Country Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="country name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-base">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="short description "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Average Cost</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder=" average cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-base">Seasonality</span>
              </label>
              <select className="select select-bordered w-full ">
                <option disabled selected>
                seasonality
                </option>
                <option>summer</option>
                <option>winter</option>
              </select>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-base">Travel Time</span>
              </label>
              <select className="select select-bordered w-full ">
                <option disabled selected>
                Travel Time
                </option>
                <option>3 days</option>
                <option>7 days</option>
                <option>15 days</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-base">Tota Visitors Per Year</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="visitors number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="user name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="category"
                  placeholder="photo url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
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

export default AddSpot;
