import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.confige";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const gitProvider = new GithubAuthProvider();
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AutthProvider = ({children}) => {
    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)
    const creatUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUsers(currentUser)
            setLoading(false)
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
        logOutUser,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AutthProvider;