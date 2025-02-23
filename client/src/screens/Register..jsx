  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import axios from "../config/axios";

  const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Client");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      axios.post("/api/auth", { name, email, password, role })
        .then((response) => {
          console.log(response.data);
          navigate("/home"); 
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Register
          </h2>
          <hr className="border-black -mt-3 mb-5 w-full m-auto" />

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

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
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Role Dropdown */}
            <div>
              <label className="block text-gray-700">Role</label>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full mt-1 mb-3 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="client">Client</option>
                <option value="freelancer">Freelancer</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Register;
