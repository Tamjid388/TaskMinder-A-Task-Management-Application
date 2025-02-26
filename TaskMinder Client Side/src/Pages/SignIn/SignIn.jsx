


import { GoogleSignin } from '@/Component/GoogleSignIn/GoogleSignin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

export const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } 
    = useForm();
    const onSubmit = (data) => {
        // console.log(data);
      };
  return (
  <div className='flex bg-gray-100   h-screen items-center'>
    
      <form onSubmit={handleSubmit(onSubmit)} className=" max-h-fit mx-auto bg-white p-8 rounded-lg shadow-lg ">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

   {/* Email Field */}
   {/* <div className="mb-4">
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" } })}
          id="email"
          type="email"
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div> */}

         {/* Password Field */}
         {/* <div className="mb-6">
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <Input
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
          id="password"
          type="password"
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div> */}

       {/* Sign In Button */}
       <Button
        type="submit"
        className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-700 transition duration-300"
      >
        Sign In
      </Button>

      {/* Google Sign In */}
      <Button  variant="outline" className='w-full py-2 mt-2'>
        <GoogleSignin></GoogleSignin>
      </Button>


      <Link to={'/'}>
      <p className='text-sm font-semibold underline mt-2'> Back TO Home</p>
      </Link>




 

 
  </form>
  </div>
  )
}
