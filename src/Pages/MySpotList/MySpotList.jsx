import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AutthProvider";

const MySpotList = () => {
    const spots = useLoaderData();
    const {users} = useContext(AuthContext)
    const email = users?.email;
    console.log(email);
    const mySpot = spots.filter(spot=> spot.email == email)
    console.log(mySpot);
    return (
        <div>
            
        </div>
    );
};

export default MySpotList;