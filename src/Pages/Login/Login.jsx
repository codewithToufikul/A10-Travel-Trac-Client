const Login = () => {
  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
      <div className=" mt-8 w-[800px] p-5 bg-gray-100">
        <h1 className=" text-4xl text-center font-semibold ">
          Login Your <span className=" text-blue-400">Account</span>
        </h1>
        <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="divider">OR</div>
        <div>
            <div>
                <button className="btn text-lg">Google</button>
            </div>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
