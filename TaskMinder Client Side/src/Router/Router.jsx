import React from 'react'
import { Route, Routes } from 'react-router'
import { MainLayout } from '../Layout/MainLayout'
import { HomePage } from '../Pages/Home/HomePage'
import { SignIn } from '@/Pages/SignIn/SignIn'
import { Intro } from '@/Pages/IntroPage/Intro'
import { Privateroute } from './Privateroute'

export const Router = () => {
  return (
   
    <Routes>
        <Route path='/' element={<MainLayout></MainLayout>}>
        <Route path='/' element={<Intro></Intro>}></Route>
        <Route path='/home' element={
          <Privateroute>
            <HomePage></HomePage>
          </Privateroute>
        }>
        </Route>
        </Route>

        <Route path='/signIn' element={<SignIn></SignIn>}>


        </Route>
    </Routes>


  )
}
