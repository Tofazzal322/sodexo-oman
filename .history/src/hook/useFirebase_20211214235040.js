import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";



const auth = getAuth();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [errorCode, setErrorCode] = useState();
  const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState();
    
    
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