import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../config/axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");

    try {
      const response = await axios.post("/api/auth/login", { email, password });

      const { role, token } = response.data;
      
      if (!role) {
        console.error("User not found");
        return;
      }

      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", role);

      // Navigate based on user role
      if (role === 'Client') {
        navigate('/client');
      } else if (role === 'Freelancer') {
        navigate('/freelancer');
      }

    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <hr className="border-black -mt-3 mb-5 w-full m-auto" />

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
          <p className='text-center text-[13px]'>Don't have an account? <Link to={'/register'} className='text-blue-600'>Signup</Link></p>

        </form>
      </div>
    </div>
  )
}

export default Login