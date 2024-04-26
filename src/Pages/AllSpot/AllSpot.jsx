import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AutthProvider";

const AllSpot = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default AllSpot;