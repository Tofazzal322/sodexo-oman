import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
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
     const githubProvider = new GithubAuthProvider();


     const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        //  Save User to database
        saveUserToDatabase(email, name);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };



  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

    return {

    }
};

export default useFirebase;