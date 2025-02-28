import React from 'react'
import { Navbar } from '../Component/NavBar/Navbar'
import { Outlet } from 'react-router'
import { Demo } from '@/Pages/Demo/Demo'

export const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    
    </div>
  )
}
