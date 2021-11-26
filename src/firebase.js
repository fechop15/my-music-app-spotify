// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNCyJlcVOEAMfgIKnsz6lluuPc_N05SoQ",
    authDomain: "my-music-app-46142.firebaseapp.com",
    projectId: "my-music-app-46142",
    storageBucket: "my-music-app-46142.appspot.com",
    messagingSenderId: "1040605191010",
    appId: "1:1040605191010:web:d54d51bf303c89ab982a3b",
    measurementId: "G-79G63QCLQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const authFirebase=getAuth(app);