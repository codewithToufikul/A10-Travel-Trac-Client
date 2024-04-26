import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
      <div className=" mt-8 w-[800px] p-10 bg-gray-100">
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
          <button className="btn bg-blue-400 text-lg text-white">Login</button>
        </div>
        <div className="divider">OR</div>
        <div>
            <div className=" flex justify-center gap-6">
                <button className="btn hover:shadow-2xl hover:text-black bg-transparent hover:bg-transparent btn-outline btn-wide text-4xl px-5"><FcGoogle /> <span className=" text-xl">Google</span></button>
                <button className="btn hover:shadow-2xl bg-transparent hover:bg-transparent hover:text-black btn-outline btn-wide text-4xl px-5"><FaGithub /> <span className=" text-xl">GitHub</span></button>
            </div>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
