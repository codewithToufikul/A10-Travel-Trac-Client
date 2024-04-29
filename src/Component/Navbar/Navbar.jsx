import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AutthProvider";
import { IoIosLogOut } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { users, logOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("User Successfully LogOut");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const handleTheme = () =>{
    theme == "light" ? setTheme('dark') : setTheme('light')
    console.log(theme);
    
  }

  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "text-blue-500 font-bold text-base underline"
              : isPending
              ? "pending"
              : "text-base mr-2  font-semibold "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? " text-blue-500 font-bold text-base underline"
              : isPending
              ? "pending"
              : " text-base mr-2  font-semibold"
          }
          to="/allspot"
        >
          {" "}
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? " text-blue-500 font-bold text-base underline"
              : isPending
              ? "pending"
              : " text-base mr-2  font-semibold"
          }
          to="/addspot"
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? " text-blue-500 font-bold text-base underline"
              : isPending
              ? "pending"
              : " text-base mr-2  font-semibold"
          }
          to="/mylist"
        >
          My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar justify-between bg-base-100 max-w-[1440px] mx-auto py-4">
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
        <ul className=" gap-5 flex items-center px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <div className=" flex items-center gap-16 ">
          <div className="lg:block hidden ">
          <div className="join ">
            <input
              className="input  rounded-full input-bordered join-item"
              placeholder="Type Place Name"
            />
            <button className="btn  join-item bg-transparent border-2 rounded-full text-xl hover:bg-transparent ">
              <FaSearch />
            </button>
          </div>
          </div>
          <button className=" w-10 h-10   rounded-full  mr-4 " onClick={handleTheme}>
            {
              theme == "light" ? <img
              className=" w-full h-full"
              src="https://i.ibb.co/Zd6kxCc/pngtree-dark-mode-icon-light-png-clipart-png-image-3811921-removebg-preview.png"
            /> : <img
            className=" bg-gray-300 rounded-full w-full h-full"
            src="https://i.ibb.co/bdJn1RB/4586694-200-removebg-preview.png"
          />
            }
          </button>
        </div>
        {users ? (
          <div className="dropdown z-40 dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className=" md:w-16 w-12 md:h-16 h-12 border-2 md:border-4 md:p-1 rounded-full  border-blue-400 m-1"
            >
              <img
                className="w-full rounded-full h-full"
                src={users.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content  top-14 right-0 md:top-12 md:right-0 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-xl font-semibold text-blue-400">
                  {users.displayName}
                </a>
              </li>
              <li onClick={handleLogOut}>
                <a className=" text-lg font-semibold text-red-500">
                  LogOut <IoIosLogOut />
                </a>{" "}
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex md:gap-4">
            <Link
              to="/login"
              className=" text-lg font-semibold btn btn-ghost hover:bg-white hover:border-2 hover:border-blue-400 "
            >
              Login
            </Link>
            <Link to="/register" className="btn bg-blue-400 text-white text-lg">
              Register
            </Link>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Navbar;
