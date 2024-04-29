import { Link } from 'react-router-dom';
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div className=' flex h-screen flex-col items-center justify-center'>
            <h1 className=' text-3xl md:text-4xl lg:text-5xl font-semibold'>Page Not <span className=' text-blue-400'>Found</span> !</h1>
            <div className='lg:w-[700px]'>
            <img  src={error} alt="" />
            </div>
            <Link to="/" className=' btn bg-blue-400 text-lg text-white'>Go Home</Link>
        </div>
    );
};

export default ErrorPage;