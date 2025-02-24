import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from '../screens/Root'
import Register from '../screens/Register.'
import Login from '../screens/Login'
import ClientDashboard from '../screens/ClientDashboard'
import FreelancerDashboard from '../screens/FreelancerDashboard'

const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path='/login' element={<Login/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/client" element={<ClientDashboard />} />
                <Route path="/freelancer" element={<FreelancerDashboard />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes