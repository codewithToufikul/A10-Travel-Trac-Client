import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AutthProvider";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const {users} = useContext(AuthContext);
  const handleLogOut = () =>{
    console.log('ok');
  }

    const navLink = <>
    <li><NavLink className={({ isActive, isPending }) =>
                  isActive
                    ? "text-blue-500 font-bold text-base underline"
                    : isPending
                    ? "pending"
                    : "text-base mr-2  font-semibold "
                } to="/">Home</NavLink></li> 
    <li><NavLink className={({ isActive, isPending }) =>
                  isActive
                    ? " text-blue-500 font-bold text-base underline"
                    : isPending
                    ? "pending"
                    : " text-base mr-2  font-semibold"
                } to="/allspot"> All Tourists Spot</NavLink></li> 
    <li><NavLink className={({ isActive, isPending }) =>
                  isActive
                    ? " text-blue-500 font-bold text-base underline"
                    : isPending
                    ? "pending"
                    : " text-base mr-2  font-semibold"
                } to="/addspot">Add Tourists Spot</NavLink></li> 
    <li><NavLink className={({ isActive, isPending }) =>
                  isActive
                    ? " text-blue-500 font-bold text-base underline"
                    : isPending
                    ? "pending"
                    : " text-base mr-2  font-semibold"
                } to="/">My List</NavLink></li> 
    
</>
  return (
    <div className="navbar bg-base-100 max-w-[1440px] mx-auto py-6">
      <div className="navbar-start md:w-[20%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <img className=" w-28 md:w-[200px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" gap-5 flex items-center px-1">
          
        {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {
          users ? <div className="dropdown z-40 dropdown-hover">
          <div tabIndex={0} role="button" className=" w-16 border-4 p-1 rounded-full  border-blue-400 m-1"><img src={users.photoURL} alt="" /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li ><a className="text-xl font-semibold text-blue-400">{users.displayName}</a></li>
            <li onClick={handleLogOut} ><a className=" text-lg font-semibold text-red-500">LogOut <IoIosLogOut /></a> </li>
          </ul>
        </div> : <div className="flex md:gap-4">
        <Link to="/login" className=" text-lg font-semibold btn btn-ghost hover:bg-white hover:border-2 hover:border-blue-400 ">Login</Link>
        <Link to="/register" className="btn bg-blue-400 text-white text-lg">Register</Link>
        </div>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
