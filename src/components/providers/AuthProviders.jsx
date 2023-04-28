import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Create User Email and password
    const createUser = (email, password) => {
        // for path replace
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user Email and Password
    const logInUserEmailPassword = (email, password) => {
        // for path replace
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out
    const logOut = () => {
        return signOut(auth);
    }

    // observe user auth state (when state change then catch it)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        // stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUserEmailPassword,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;