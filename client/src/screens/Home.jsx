import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1596457596404-350378e433c3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Platform!
        </h1>
        <p className="text-lg md:text-xl mb-6">Find Whatever You Need To Find.</p>

        {/* Buttons */}
        <div className="space-x-4">
          <Link to = "/login">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Login
          </button>
          </Link>
          <Link to={'/register'}>
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
            Signup
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home