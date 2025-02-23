import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from '../screens/Root'
import HomeTest from '../screens/HomeTest'
import Register from '../screens/Register.'
import Login from '../screens/Login'

const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path='/login' element={<Login/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<HomeTest />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes