import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";

const Root = () => {
    return (
        <div className=" font-lato" >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer ></Footer>
        </div>
    );
};

export default Root;