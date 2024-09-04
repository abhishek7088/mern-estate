import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto py-4'> {/* Added py-4 to add equal padding on top and bottom */}
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-400'>Air</span>
          <span className='text-slate-500'>bnb</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-500' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-slate-700 hover:underline'>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
