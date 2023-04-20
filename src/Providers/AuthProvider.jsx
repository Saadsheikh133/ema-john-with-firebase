import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(App)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        // stop observing while unmounting
        return () => unsubscribe;
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;