import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const emailPassLogin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    };

    const updationProfile = (info) => {
        setLoading(true)
        return updateProfile(auth.currentUser, info)
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        }
    },[])

    const authInfo = {user,createUser,loading, emailPassLogin,logOut,updationProfile};
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider