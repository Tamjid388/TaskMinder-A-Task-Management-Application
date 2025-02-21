import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { AuthContext } from '../Providers/Authprovider'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdMenu } from "react-icons/md";

export const Navbar = () => {
  const {user}=useContext(AuthContext)
  console.log(user?.email);


  const menu=
  <>
   <NavLink to={'/signIn'}>Sign In</NavLink>
   
  </>
  return (
    <nav className='flex justify-between w-11/12 mx-auto py-3'>
      <div>
        <h1 className='text-2xl font-bold'>Tasks
          <span className='text-[#0000ff]'>Minder</span></h1>
      </div>

      {/* <div>
        <ul className='font-semibold'>
          {menu}
        </ul>
      </div> */}
      <div>
     <div className='flex items-center gap-2'>
     <MdMenu  className='text-4xl bg-gray-200 rounded-full p-1'/>
     <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar> <h1 className='font-semibold'>{user?.
displayName}</h1>
     </div>

      </div>
       
    </nav>
  )
}
