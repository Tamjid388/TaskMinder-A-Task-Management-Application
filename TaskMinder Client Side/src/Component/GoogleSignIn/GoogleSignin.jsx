import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/Authprovider";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";



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
      console.log("UserInfo Sent",userInfo);
      axios.post('https://task-minder-server-side.vercel.app/users',userInfo)
      // axios.post('http://localhost:5000/users',userInfo)
      .then(response => {
           Swal.fire({
                title: "SignIn Successfull!",
                icon: "success",
                draggable: true
              });
        navigate('/home');
      })
      .catch(error => {
        console.error('Error:', error);
      });


      
      })





      
    }
  return (
    <div onClick={handleGoogleSignIn} className='flex items-center gap-2'>
     <p className="">  <FcGoogle /></p> Sign In With Google
    </div>
  )
}
