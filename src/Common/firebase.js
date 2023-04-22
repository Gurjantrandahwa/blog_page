import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKu8d-4c7J93rP2-qSdSZwJRwcR4HcQY0",
    authDomain: "blog-page-df04f.firebaseapp.com",
    projectId: "blog-page-df04f",
    storageBucket: "blog-page-df04f.appspot.com",
    messagingSenderId: "102173492089",
    appId: "1:102173492089:web:e6f6e016527375e108e5a8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;