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



 ////////////////////////// Log-out  From Ui  /////////////////////////////
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

    
     ////////////////////////// Save User To database //////////////////////////////

  const saveUserToDatabase = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://fathomless-shelf-34125.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////// Save Google User To database   ////////////////////////////////
  const saveGoogleUserToDatabase = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://fathomless-shelf-34125.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
////////////////////////////////////////////////////////////////////////////  
    return {

    }
};

export default useFirebase;