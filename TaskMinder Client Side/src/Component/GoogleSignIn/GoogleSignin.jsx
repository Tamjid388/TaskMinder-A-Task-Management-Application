import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/Authprovider";
import axios from "axios";
import { useNavigate } from "react-router";



export const GoogleSignin = () => {
    const { signInWithGoogle}=useContext(AuthContext)
    const navigate=useNavigate()
   const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then((result) => {
        console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        photo: result.user?.photoURL
        
      };
      axios.post('http://localhost:5000/users',userInfo)
      navigate('/')


      
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('SignIn Failed',errorMessage);
     
      });
    }
  return (
    <div onClick={handleGoogleSignIn} className='flex items-center gap-2'>
     <p className="">  <FcGoogle /></p> Sign In With Google
    </div>
  )
}
