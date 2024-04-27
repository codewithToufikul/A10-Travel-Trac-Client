import { LuPhoneCall } from 'react-icons/lu';
import logo from '../../assets/logo.png'
import { FiMail } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-200 mt-28">
        <footer className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4  md:pl-20 md:pt-20 p-5  max-w-[1440px] mx-auto text-base-content">
      <nav className=' max-w-[300px]'>
        <img className='w-[250px]' src={logo} alt="" />
        <p className=' text-base mt-4'>Explore the World with Your Company Name. Your trusted partner in unforgettable travel experiences. </p>
        <div className='flex mt-6 gap-8'>
            <a className=' text-2xl cursor-pointer'><BsTwitter /></a>
            <a className=' text-2xl cursor-pointer'><FaFacebook /></a>
            <a className=' text-2xl cursor-pointer'><FaGithub /></a>
            <a className=' text-2xl cursor-pointer'><FaInstagramSquare /></a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title text-xl font-bold">About us</h6>
        <a className="link link-hover text-lg">Our Story</a>
        <a className="link link-hover text-lg">Travel Blog & Tips</a>
        <a className="link link-hover text-lg">Working With Us</a>
        <a className="link link-hover text-lg">Be Our Partner</a>
      </nav>
      <nav>
        <h6 className="footer-title text-xl font-bold">Contact Info</h6>
        <p className="text-lg">455 West Orchard Street <br /> King Mountain , NC 280867</p>
        <p className=' flex items-center gap-3 text-lg'><span className=' text-xl font-bold text-blue-500'><LuPhoneCall /></span> +088 45564 XXXX</p>
        <p className=' flex items-center gap-3 text-lg'><span className=' text-xl font-bold text-blue-500'><FiMail /></span>
        example@gmail.com</p>
      </nav>
      
      <form>
        <h6 className="footer-title text-xl font-bold">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-lg">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
      
    </footer>
    <div className="divider"></div> 
      <div>
        <h1 className=' text-lg text-center pb-4'>© 2024 All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
