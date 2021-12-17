import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase.config";
// import firebaseConfig from "./firebase.config";

const FirebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInit;
