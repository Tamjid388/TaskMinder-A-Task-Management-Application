import React from 'react'
import { Route, Routes } from 'react-router'
import { MainLayout } from '../Layout/MainLayout'
import { HomePage } from '../Pages/Home/HomePage'
import { SignIn } from '@/Pages/SignIn/SignIn'

export const Router = () => {
  return (
   
    <Routes>
        <Route path='/' element={<MainLayout></MainLayout>}>
        <Route path='/' element={<HomePage></HomePage>}>
        </Route>
        </Route>

        <Route path='/signIn' element={<SignIn></SignIn>}>


        </Route>
    </Routes>


  )
}
