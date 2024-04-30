import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Features from "../Feauture/Features";
import TouristSpots from "../TouristSpots/TouristSpots";
import Countrys from "../Countrys/Countrys";
import PopularCategory from "../PopularCategory/PopularCategory";

const Home = () => {
    const spots = useLoaderData()
    
    return (
        <div>
            <div className=" max-w-[1440px] mx-auto">
            <Banner></Banner>
            </div>
            <div className=" mt-28">
                <Features></Features>
            </div>
            <div>
                <TouristSpots spots={spots}></TouristSpots>
            </div>
            <div>
                <PopularCategory></PopularCategory>
            </div>
            <div>
            <Countrys></Countrys>
            </div>
        </div>
    );
};

export default Home;