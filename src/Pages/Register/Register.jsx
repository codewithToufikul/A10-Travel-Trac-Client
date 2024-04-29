import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AutthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const {creatUser , updateUser} = useContext(AuthContext);
  const [passError, setPassError] = useState('')
  const [show, setShow] = useState(true);
  const navigete = useNavigate();
  const handleCreateUser = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    if(password < 6){
      setPassError('please provide more then 6 character password');
      return;
  }
    if(!/[A-Z]/.test(password)){
      setPassError('please must contain at least one uppercase letter')
      return;
    }
    if(!/[a-z]/.test(password)){
      setPassError('please must contain at least one lowercase letter')
      return;
    }
    creatUser(email, password)
    .then((result) => {
      console.log(result);
      toast.success('Register Success')
      updateUser(name, photo)
      navigete('/')
      .then(() => {
      }).catch((error) => {
        toast.error(error.message)
        console.log(error);
      });
    })
    .catch((error) => {
      toast.error(error.message)
      console.error(error);
    });
  }
  const handlePasswordShow = () => {
    setShow(!show);
  };
  
    return (
        <div className=" max-w-[1440px] mx-auto">
              <div className=" w-[800px] rounded-xl bg-gray-100 m-auto  p-10 lg:mt-20">
            <form onSubmit={handleCreateUser} className=" ">
              <h1 className="text-center text-4xl font-medium">Please <span className="text-blue-500 font-semibold">Register</span></h1>
              <div className="form-control">
                <label className="label text-lg">Name</label>
                <input required type="name" name="name" placeholder="Enter Your Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label text-lg">Email</label>
                <input required type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label text-lg">Photo URL</label>
                <input required type="url" name="photo" placeholder="Photo URL" className="input input-bordered"/> 
              </div>
              <div className="form-control">
                <label className="label text-lg">Password</label>
                <div className=" relative">
                <input required type={show ? 'password' : 'text'} name="password" placeholder="Password" className=" w-full input input-bordered"/>
                <p onClick={handlePasswordShow} className={`absolute top-3 right-3 text-2xl ${show ? 'hidden' : ''}`}><FaEye /></p>
                <p onClick={handlePasswordShow} className={`absolute top-3 right-3 text-2xl ${!show ? 'hidden' : ''}`}><FaEyeSlash /></p>
                </div>
                {
                  passError ? <span className=" text-[13px] text-red-500">{passError}</span> : ''
                }
              </div>
              <div className="form-control mt-6">
                <button className="animate__animated animate__flipInX btn bg-blue-400 border-none text-xl text-white">Register</button>
              </div>
            </form>
            <p className="mt-6 text-lg text-center">Have an account! <Link to="/login" className="text-blue-500 underline">Login here...</Link></p>
          </div>
          <Toaster />
        </div>
    );
};

export default Register;