import React, { useState } from 'react';
import login from '../assets/login.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={login} alt="" />
      </div>
      <div className="bg-blue-100 flex flex-col justify-center">
        <form className="max-w-[600px] mx-8 width-full bg-gray-200 p-20 px-4 rounded-lg">
          <h2 className="text-4xl font-bold text-center">Log In</h2>
          <div className="flex flex-col py-2">
            <label>Login ID</label>
            <input
              className="rounded-lg mt-2 p-2 focus:border-blue-500 focus-bg-gray-300 focus-outline-none"
              type="text"
              placeholder="enter login ID"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <div className="relative w-full">
              <input
                className="rounded-lg w-full p-2 focus-border-blue-500 focus-bg-gray-300 focus-outline-none"
                placeholder="password"
                type={showPassword ? 'text' : 'password'}
              />
              <button
                type="button" // Change type to "button"
                className="absolute top-2 right-2 text-blue-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <div className="flex justify-between py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />Remember me
            </p>
            <p style={{ color: 'red' }}>Change password</p>
          </div>
          <p className="flex items-center">
            <input className="mr-2" type="checkbox" />
            Agree To<span className="text-red-500 ml-1 underline">Terms and Conditions</span>
          </p>

          <button className="w-full my-5 py-2 bg-blue-300 shadow-lg shadow-blue-300/80 hover-shadow-blue-300/40 rounded">
            Submit
          </button>

          <div className="text-center">
            Don't have an account?<span style={{ color: 'red' }}>Sign up</span>
          </div>
        </form>
      </div>
    </div>
  );
}
