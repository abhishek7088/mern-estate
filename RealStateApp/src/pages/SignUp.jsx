import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-6'>Sign Up </h1>
      <form className='flex flex-col gap-4'>
         < input type="text" placeholder='username' className='border p-3 rounded-lg ' id="username"/>
         < input type="text" placeholder='email' className='border p-3 rounded-lg ' id="email"/>
         < input type="text" placeholder='password' className='border p-3 rounded-lg ' id="password"/>
         <button  className=' bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account ?</p>
        <Link to={"/sign-in"}></Link>
        <span className='text-blue-600'>Sign in</span>
      </div>
    </div>
  )
}
