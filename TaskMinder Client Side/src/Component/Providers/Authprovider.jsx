import { auth } from "@/Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect } from "react"



export const AuthContext=createContext(null)

export const Authprovider = ({children}) => {

    useEffect(()=>{
  

    },[])


      // Google Sign-In
      const googleProvider = new GoogleAuthProvider();
      const signInWithGoogle = () => {
          return signInWithPopup(auth, googleProvider);
      };
  


    const info={
        signInWithGoogle
    }
  return (
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
  )
}
 