import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Countrys = () => {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countrys")
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
      });
  }, []);
  console.log(countrys);
  return (
    <div className="bg-blue-50   max-w-[1440px] mx-auto">
      <div className=" max-w-3xl mx-auto text-center space-y-4 p-10">
        <h1 className=" text-5xl font-semibold">Chose Your <span className=" text-blue-400">Favorite</span> Country</h1>
        <p className=" text-lg">Welcome to a world of endless possibilities, where every corner holds a new adventure waiting to be discovered. From the ancient. </p>
      </div>
      <div className="px-3 pb-[100px]">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {countrys.map((country) => (
            <SwiperSlide key={country._id}>
<div className="card rounded-2xl relative">
  <figure className="h-[500px]  relative hover:scale-105 transition-all duration-500">
    <img
      className=" rounded-2xl h-full w-full"
      src={country.image}
    />
    <div className=" absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] rounded-2xl"></div>
  </figure>
  <div className="card-body absolute z-10">
    <h2 className="card-title text-white">Shoes!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Countrys;
