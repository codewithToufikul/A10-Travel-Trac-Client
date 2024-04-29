import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AutthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className=" min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity w-[50px] md:w-[100px] text-blue-400"></span>
    </div>
    }
    if(users){
        return children;
    }
    else{
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }
};

export default PrivetRoute;