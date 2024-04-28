import { GiLaurelsTrophy } from "react-icons/gi";
import travel from "../../assets/travel.jpg";
import { FaPeopleRobbery } from "react-icons/fa6";
import { HiGiftTop } from "react-icons/hi2";
import { MdAddAPhoto } from "react-icons/md";
import { Fade, JackInTheBox,} from "react-awesome-reveal";
const Features = () => {
  return (
    <div className="flex justify-center lg:flex-row flex-col gap-10 lg:p-24 p-9 bg-blue-50 items-center">
      <Fade>
      <div className=" ">
        <img className="md:w-[600px] rounded-2xl w-full" src={travel} alt="" />
      </div>
      </Fade>
      <div>
        <div className=" px-5 space-y-3 mb-5"><h1 className="text-3xl md:text-4xl font-semibold ">
          Your Best Travel Partner
        </h1>
        <p className=" md:text-lg">
          Explore with our trusted travel partners for unforgettable journeys. <br className=" md:block hidden" />
          Your adventure begins here.
        </p></div>
        <div className=" grid gap-5 md:grid-cols-2">
          <JackInTheBox>
          <div className=" w-[350px] bg-base-100 shadow-xl">
            <div className="card-body">
              <p className=" text-4xl bg-red-400 w-fit p-2 rounded-full hover:shadow-red-400 hover:shadow-xl">
                <GiLaurelsTrophy />
              </p>
              <h2 className="card-title">Best Travel Agency</h2>
              <p>
                Discover unparalleled journeys with our award-winning travel
                agency.
              </p>
            </div>
          </div>
          </JackInTheBox>
          <JackInTheBox>
          <div className=" w-[350px] bg-base-100 shadow-xl">
            <div className="card-body">
              <p className=" text-3xl bg-green-400 w-fit p-3 rounded-full hover:shadow-green-400 hover:shadow-xl">
              <FaPeopleRobbery />
              </p>
              <h2 className="card-title">Trusted & Friendly</h2>
              <p>
              Journeys with our trusted and friendly travel agency. Your adventure awaits
              </p>
            </div>
          </div>
          </JackInTheBox>
          <JackInTheBox>
          <div className=" w-[350px] bg-base-100 shadow-xl">
            <div className="card-body">
              <p className=" text-4xl bg-yellow-400 w-fit p-2 rounded-full hover:shadow-yellow-400 hover:shadow-xl">
              <HiGiftTop />
              </p>
              <h2 className="card-title">Low Cost & Shops</h2>
              <p>
              Budget-friendly shopping experiences at our low-cost, shopper-friendly store.
              </p>
            </div>
          </div>
          </JackInTheBox>
          <JackInTheBox>
          <div className=" w-[350px] bg-base-100 shadow-xl">
            <div className="card-body">
              <p className=" text-3xl bg-pink-400 w-fit p-3 rounded-full hover:shadow-red-400 hover:shadow-xl">
              <MdAddAPhoto />
              </p>
              <h2 className="card-title">Photography</h2>
              <p>
              Capture life moments beautifully with our photography services.
              </p>
            </div>
          </div>
          </JackInTheBox>
        </div>
      </div>
    </div>
  );
};

export default Features;
