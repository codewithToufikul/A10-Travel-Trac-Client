import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AutthProvider";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const {loginUser, googleLogin, githubLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigete = useNavigate();
    const handleLoginUser = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(()=>{
          toast.success('Successfully Login!')
          navigete(location?.state ? location.state : '/')
        })
        .catch(error=>{
          toast.error(error.message)
            console.error(error);
        })
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(()=>{
          toast.success('Successfully Login!')
          navigete(location?.state ? location.state : '/')
        })
        .then(error=>{
          toast.error(error.message)
            console.error(error);
        })
    }
    const gandleGithubLogin= () =>{
        githubLogin()
        .then(()=>{
          toast.success('Successfully Login!')
          navigete(location?.state ? location.state : '/')
        })
        .then(error=>{
          toast.error(error.message)
            console.error(error);
        })
    }
  return (
    <div className="max-w-[1440px] flex justify-center lg:mx-auto">
      <div className="mt-8  max-w-[800px] mg:m-auto p-5 lg:p-10 lg:mt-20 rounded-md bg-gray-100">
        <h1 className=" text-3xl lg:text-4xl text-center font-semibold ">
          Login Your <span className=" text-blue-400">Account</span>
        </h1>
        <form onSubmit={handleLoginUser} className=" mt-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
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
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-400 text-lg text-white">Login</button>
        </div>
        <div className="divider">OR</div>
        

      </form>
      <div>
            <div className=" flex md:flex-row flex-col items-center justify-center gap-6">
                <button onClick={handleGoogleLogin} className="btn hover:shadow-2xl hover:text-black bg-transparent hover:bg-transparent btn-outline btn-wide text-4xl px-5"><FcGoogle /> <span className=" text-xl">Google</span></button>
                <button onClick={gandleGithubLogin} className="btn hover:shadow-2xl bg-transparent hover:bg-transparent hover:text-black btn-outline btn-wide text-4xl px-5"><FaGithub /> <span className=" text-xl">GitHub</span></button>
            </div>
        </div>
        <h2 className="text-lg mt-10 font-medium">Don`t have an account? <Link  to="/register" className="text-blue-500 font-semibold">Register here...</Link></h2>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
