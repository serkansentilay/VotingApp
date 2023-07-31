// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2WOvar45djmtsQJvOhj_14MC3zoQ2JK8",
    authDomain: "firebas-auth-c501f.firebaseapp.com",
    projectId: "firebas-auth-c501f",
    storageBucket: "firebas-auth-c501f.appspot.com",
    messagingSenderId: "466163007486",
    appId: "1:466163007486:web:fc15b363a4af2eade30aaf"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };