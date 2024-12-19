// import React from 'react'

// function Register() {
//   return (
//     <div className='flex flex-col justify-center items-center w-full h-screen bg-yellow-300'>
//     <div>
//     <label>Name : </label>
//     <input type='text' placeholder='name' />
//     </div>
//       <div>
//       <label>Email : </label>
//       <input type='email' placeholder='email' />
//       </div>
//       <div>
//       <label>Password : </label>
//       <input type='password' placeholder='password' />
//       </div>
//       <div>
//       <label>Contact : </label>
//       <input type='text' placeholder='phone no.' />
//       </div>
//       <div>
//       <label>Address : </label>
//       <input type='text' placeholder='address' />
//       </div>
//       <button>
//         Sumbit
//       </button>
//     </div>
//   )
// }

// export default Register


import React, { useState } from 'react';

function Register() {

  let [formData,setFormData] = useState({name:"",email:"",password:""});


  const handleClick = async () => {

      let result = await fetch ('http://localhost:5000/register',{
      method: 'post',
      body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    result = await result.json()
    console.log(result)
  }

  let handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            placeholder="Name"
            name='name'
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            placeholder="Email"
            name='email'
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            placeholder="Password"
            name='password'
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700">Contact:</label>
          <input
            type="text"
            placeholder="Phone No."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            placeholder="Address"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div> */}

        <button className="w-full py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600" onClick={handleClick}>
          Submit
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-teal-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

