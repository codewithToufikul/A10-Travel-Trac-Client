import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.confige";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const gitProvider = new GithubAuthProvider();
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AutthProvider = ({children}) => {
    const [users, setUsers] = useState()
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
    const googleLogin = () =>{
        return signInWithPopup(auth, provider)

    }
    const githubLogin = ()=>{
        return signInWithPopup(auth, gitProvider)
    }

    const logOutUser = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUsers(currentUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])
    const value = {
        creatUser,
        updateUser,
        loginUser, 
        googleLogin, 
        githubLogin,
        users,
        logOutUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AutthProvider;