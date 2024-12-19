import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate= useNavigate()
  let [formData,setFormData] =useState({email:"",password:""})
  const handleClick = async (e) => {
    e.preventDefault()

    let result = await fetch('http://localhost:5000/login',{
      method: 'post',
      body: JSON.stringify({email: formData.email, password: formData.password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    result = await result.json()
    console.log(result)
    if(!result.success){
      if(result.message === "Email not found"){
        alert("wrong email")

      }
      else{
        alert("wrong password")

      }
    }

    else{
      const authToken = result.authToken
      localStorage.setItem('authToken',authToken)

      navigate('/')
    }
   
  }
  let handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  } 

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">Login</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
          name='email'
            type="email"
            placeholder="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
          name='password'
            type="password"
            placeholder="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
        </div>
        
        <button className="w-full py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600" onClick={handleClick}>
          Login
        </button>
        
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/register" className="text-teal-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
