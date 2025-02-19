import React from 'react'
import { Route, Routes } from 'react-router'
import { MainLayout } from '../Layout/MainLayout'
import { HomePage } from '../Pages/Home/HomePage'

export const Router = () => {
  return (
   
    <Routes>
        <Route path='/' element={<MainLayout></MainLayout>}>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        </Route>
    </Routes>
  )
}
