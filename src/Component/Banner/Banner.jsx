import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      className="lg:h-[750px]"
      spaceBetween={500}
      slidesPerView={1}
      
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide id="slide1">
        <div className="flex  flex-col h-full  items-center justify-center">
          <div className=" flex-1 w-[700px] flex flex-col justify-center items-center space-y-10" style={{ zIndex: 1 }}>
            <h3 className=" text-center font-pacifico text-2xl md:text-3xl font-thin text-yellow-300">
              Nature Beauty
            </h3>
            <h1 className=" text-center   font-semibold text-white text-4xl md:text-6xl lg:text-7xl ">
              Discover the most <br /> Engaging <span className=" underline text-blue-400
              ">places</span>
            </h1>
            <button className=" md:text-base rounded-none md:px-6  text-white font-semibold  btn bg-blue-500 border-none block ">
              Explore Destinations
            </button>
          </div>
          <div className=" pb-6 md:pb-14 z-10  w-full grid gap-2  grid-cols-2 md:grid-cols-4">
            <div className=" text-center text-white">
                <h1 className=" text-4xl md:text-5xl lg:text-6xl font-semibold">20k</h1>
                <h2 className=" text-sm md:text-lg">Total Active Pro User</h2>
            </div>
            <div className=" text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">11k</h1>
                <h2 className=" text-sm md:text-lg">Total Available Tour</h2>
            </div>
            <div className=" text-center text-white">
                <h1 className=" text-4xl md:text-5xl lg:text-6xl font-semibold">40k</h1>
                <h2 className=" text-sm md:text-lg">Social Follow Like</h2>
            </div>
            <div className=" text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">8k</h1>
                <h2 className=" text-sm md:text-lg">5 Star rating client</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide2">
        <div className="flex  flex-col h-full  items-center justify-center">
        <div className=" flex-1 w-[700px] flex flex-col justify-center items-center space-y-10" style={{ zIndex: 1 }}>
            <h3 className=" text-center font-pacifico text-2xl md:text-3xl font-thin text-yellow-300">
              Explore The World
            </h3>
            <h1 className=" text-center   font-semibold text-white text-4xl md:text-7xl  ">
                Relishing the <br /> Wonders of  
                <span className=" ml-5 underline text-blue-400
              "> Travel</span>
            </h1>
            <button className=" md:text-base rounded-none md:px-6  text-white font-semibold  btn bg-blue-500 border-none block ">
              Explore Destinations
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide id="slide3"><div className="flex  flex-col h-full  items-center justify-center">
        <div className=" flex-1 w-[700px] flex flex-col justify-center items-center space-y-10" style={{ zIndex: 1 }}>
            <h3 className=" text-center font-pacifico text-2xl md:text-3xl font-thin text-yellow-300">
              The Best Place
            </h3>
            <h1 className=" text-center   font-semibold text-white text-4xl md:text-7xl  ">
                Life is a Adventure <br /> Make the 
                <span className=" ml-5 underline text-blue-400
              "> Best</span>
            </h1>
            <button className=" md:text-base rounded-none md:px-6  text-white font-semibold  btn bg-blue-500 border-none block ">
              Explore Destinations
            </button>
          </div>
        </div></SwiperSlide>
    </Swiper>
  );
};

export default Banner;
