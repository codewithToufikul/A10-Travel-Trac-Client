import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.confige";

export const AuthContext = createContext(null)
const AutthProvider = ({children}) => {
    const creatUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const value = {creatUser, updateUser, loginUser}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AutthProvider;