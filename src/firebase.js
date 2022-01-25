import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBAIOxa74PRGe90U7pAcCyTCREFsRxrLY",
    authDomain: "nwitter-b9bf9.firebaseapp.com",
    projectId: "nwitter-b9bf9",
    storageBucket: "nwitter-b9bf9.appspot.com",
    messagingSenderId: "997022951137",
    appId: "1:997022951137:web:763bf8cf289252817a79a0"
  };

  export default firebase.initializeApp(firebaseConfig);