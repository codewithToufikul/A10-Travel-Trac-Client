import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className=" max-w-[1440px] mx-auto">
              <div className=" w-[800px] rounded-xl bg-gray-100 m-auto  p-10 lg:mt-20">
            <form className=" ">
              <h1 className="text-center text-4xl font-medium">Please <span className="text-blue-500 font-semibold">Register</span></h1>
              <div className="form-control">
                <label className="label text-lg">Name</label>
                <input type="name" placeholder="Enter Your Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label text-lg">Email</label>
                <input type="email" placeholder="Enter Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label text-lg">Photo URL</label>
                <input type="url" placeholder="Photo URL" className="input input-bordered"/> 
              </div>
              <div className="form-control">
                <label className="label text-lg">Password</label>
                <div className=" relative">
                <input type={'password'} placeholder="Password" className=" w-full input input-bordered"/>
                <p className={`absolute top-3 right-3 text-2xl`}><FaEye /></p>
                <p className={`absolute top-3 right-3 text-2xl `}><FaEyeSlash/></p>
                </div>
                
              </div>
              <div className="form-control mt-6">
                <button className="animate__animated animate__flipInX btn bg-blue-400 border-none text-xl text-white">Register</button>
              </div>
            </form>
            <p className="mt-6 text-lg text-center">Have an account! <Link to="/login" className="text-blue-500 underline">Login here...</Link></p>
          </div>
        </div>
    );
};

export default Register;