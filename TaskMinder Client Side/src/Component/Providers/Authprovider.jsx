import { auth } from "@/Firebase/Firebase.config";
import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { signInWithPopup } from "firebase/auth";



export const AuthContext=createContext(null)

export const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setloader]=useState(true)
    console.log(user);

    useEffect(()=>{
  
        const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
            setloader(false)

        })
        return ()=>{
            unsubscribe()
        }
    },[])


      // Google Sign-In
      const googleProvider = new GoogleAuthProvider();
      const signInWithGoogle = () => {
          return signInWithPopup(auth, googleProvider);
      };
  


    const info={
        signInWithGoogle,user
    }
  return (
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
  )
}
 