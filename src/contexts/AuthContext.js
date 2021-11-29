import React, {createContext, useContext, useState, useEffect} from 'react';
import {authFirebase} from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        console.log(currentUser);
        authFirebase.onAuthStateChanged((user) => {
            setCurrentUser(user);
            console.log("usuario = "+user)
            if (user)
                localStorage.setItem("stateLogin", "true");
            else
                localStorage.removeItem("stateLogin")
            console.log("Estado efect");
        })
    }, [currentUser])

    const signup = async (email, password) => {
        const user = await createUserWithEmailAndPassword(authFirebase, email, password);
        console.log(user);
    }

    const login = async (email, password) => {
        const user = await signInWithEmailAndPassword(authFirebase, email, password);
        console.log(user);
    }

    const logout = async () =>{
        localStorage.removeItem('TOKEN_SPOTIFY')
        localStorage.removeItem('stateLogin')
        await authFirebase.signOut()
    }

    const value = {
        currentUser,
        login,
        logout,
        signup
    };
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}