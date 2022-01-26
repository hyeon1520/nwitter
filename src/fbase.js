import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const authService = getAuth();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APT_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  //export default firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);

  export const authService = firevase.auth();