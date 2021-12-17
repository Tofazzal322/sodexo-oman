import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";




const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [errorCode, setErrorCode] = useState();
  const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState();
    

    const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();
     const gitProvider = new GithubAuthProvider();


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

    return {

    }
};

export default useFirebase;