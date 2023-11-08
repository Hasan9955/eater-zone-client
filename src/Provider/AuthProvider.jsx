/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";




export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const gitProvider = new GithubAuthProvider()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSign = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const githubSign = () =>{
        return signInWithPopup(auth, gitProvider)
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {

            const userEmail = currentUser?.email || user?.email 
            const currentEmail = {email: userEmail}
            setUser(currentUser)

            // give a token when a user successfully login
            if(currentUser){
                axios.post('http://localhost:5000/jwt', currentEmail, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }else{
                axios.post('http://localhost:5000/logout', currentEmail, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
            
            setLoader(false)
        })
    }, [user?.email])


    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut,
        googleSign,
        facebookSign,
        githubSign

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;