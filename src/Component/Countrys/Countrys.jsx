import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Countrys = () => {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/countrys")
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
      });
  }, []);

  return (
    <div
      className="mt-16 bg-cover bg-no-repeat bg-right"
      style={{
        backgroundImage: "url(https://i.ibb.co/XtRPvQN/Mask-group-home-1.png)",
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-4 p-10">
          <h1 className=" dark:text-blue-400 text-5xl font-semibold">
            Chose Your{" "}
            <span className="text-blue-400 font-pacifico font-thin">
              Favorite
            </span>{" "}
            Country
          </h1>
          <p className="text-lg">
            Welcome to a world of endless possibilities, where every corner
            holds a new adventure waiting to be discovered. From the ancient.
          </p>
        </div>
        <div className="px-3 pb-[100px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {countrys.map((country) => (
              <SwiperSlide key={country._id}>
                <Link to={`/countryspot/${country.country_name}`} className="card rounded-2xl  relative">
                  <figure className="md:h-[500px] h-[300px] relative hover:scale-105 transition-all duration-1000">
                    <img
                      className="rounded-2xl h-full w-full"
                      src={country.image}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] rounded-2xl"></div>
                  </figure>
                  <div className="card-body bottom-0 absolute z-10">
                    <h2 className="card-title text-white text-4xl">
                      {country.country_name}
                    </h2>
                    <p className="text-white">{country.description}</p>
                    
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <h1 className=" h-10"></h1>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Countrys;
