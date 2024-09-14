import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error,setError] = useState(null);
  //  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,  
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
     
      setError(null); // Reset error state before making the request
      const res = await fetch('/APi/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      console.log(data); // Add this to see what the API is returning
      
      if (data.success === false) {
        setError(data.message); // Set error if success is false
       
        return;
      }
      
      navigate('/sign-in');
    } catch (error) {
      
      setError(error.message); // Set error if there is a fetch or network issue
    }
  };
  
  

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-6">Sign Up</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChanges}
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChanges}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChanges}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-600">Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-600 mt-5'>{error}</p>}
    </div>
  );
}
