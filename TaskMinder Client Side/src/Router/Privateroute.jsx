import { AuthContext } from '@/Component/Providers/Authprovider'
import { Demo } from '@/Pages/Demo/Demo'
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'

export const Privateroute = ({children}) => {
    const {loader,user}=useContext(AuthContext)
   
    if(loader){
        return <Demo></Demo>
       }
       if(user){
        return children
       }
       return  <Navigate to={"/signIn"} ></Navigate>
}
