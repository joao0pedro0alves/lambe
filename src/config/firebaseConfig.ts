// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyp2fmDy-UtlsfNKM8SBTkRsTO6H-qneM",
    authDomain: "lambe-cod3er.firebaseapp.com",
    databaseURL: "https://lambe-cod3er-default-rtdb.firebaseio.com",
    projectId: "lambe-cod3er",
    storageBucket: "lambe-cod3er.appspot.com",
    messagingSenderId: "301932513484",
    appId: "1:301932513484:web:0d624132193f9d465ada69",
    measurementId: "G-LVQ599JL9K",
}

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

export default Firebase
