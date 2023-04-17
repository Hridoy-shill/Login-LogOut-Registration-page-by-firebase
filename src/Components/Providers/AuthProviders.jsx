import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../../firebase.config';


export const UserContext = createContext(null)

const auth = getAuth(app);

//for creating A User 
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
// for logIn A User
const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    return signOut(auth);
}

const AuthProviders = ({ children }) => {
    const [user, SetUser] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('auth state change', currentUser);
            SetUser(currentUser);
            setLoader(false);
        });
        
        return() =>{
            unsubscribe();
        }

    }, [])


    const userInfo = {
        user,
        loader,
        createUser,
        logInUser,
        logOut
    }
    return (
        <div>
            <UserContext.Provider value={userInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthProviders;