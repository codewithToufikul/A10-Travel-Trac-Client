import Banner from "../Banner/Banner";
import Features from "../Feauture/Features";

const Home = () => {
    return (
        <div>
            <div className=" max-w-[1440px] mx-auto">
            <Banner></Banner>
            </div>
            <div className=" mt-28">
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;