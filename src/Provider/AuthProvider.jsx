import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);


  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const LogOut=()=>{
    setLoading(true)
    return signOut(auth);
  }

  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, currentUser=>{
      console.log('auth is ok',currentUser)
      setUser(currentUser)
      setLoading(false)
      return()=>{
        unSubscribe();
      }
    })
  },[])

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    loginUser,
    createUser,
    LogOut,
    
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
