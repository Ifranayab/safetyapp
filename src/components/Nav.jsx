import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Nav=()=>{
  return (
    <div className='h-20 bg-custom-gradient '>
      <div className='flex  justify-start items-center py-6 px-6'>
        <img  className='h-10 hover:border-2 hover:border-white hover:rounded-sm' src={logo} alt="logo" />
          <Link className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm' to="/">Home</Link>
          <Link className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm' to="/aboutUs">About Us</Link>
          <Link className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm' to="/contactUs">Contact Us</Link>
          {/* <Link className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm' to="/">Review</Link> */}
          <div className='ml-auto mr-10 bg-pink-600 h-18 py-1 px-4 rounded-md cursor-pointer hover:border-2 hover:border-white'>
          <Link className='text-xl font-extrabold text-white' to="/login">Login</Link>
          </div>
          
    {/* <div className="h-20 bg-custom-gradient fixed w-[100vw] z-10"> */}
      {/* <div className="flex justify-start items-center py-6 px-6">
        <img className="h-10 hover:border-2 hover:border-white hover:rounded-sm cursor-pointer" src={logo} alt="logo" onClick={() => scrollToSection('home')} />
        <a onClick={() => scrollToSection('home')} className="mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm">Home</a>
        <a onClick={() => scrollToSection('about-us')} className="mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm">About Us</a>
        <a onClick={() => scrollToSection('contact-us')} className="mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm">Contact Us</a>
        <a onClick={() => scrollToSection('review')} className="mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm">Review</a>
        <div className="ml-auto mr-10 bg-pink-600 h-18 py-1 px-4 rounded-md cursor-pointer hover:border-2 hover:border-white">
          <Link className="text-xl font-extrabold text-white" to="/login">Login</Link> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Nav;
