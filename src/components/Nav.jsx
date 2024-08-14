import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBars } from '@fortawesome/free-solid-svg-icons'

export  class Nav extends Component {
  render() {
    return (
      <div className='h-20 bg-custom-gradient'>
        <div className='flex  justify-start items-center py-6 px-6'>
            <span className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm'>Home</span>
            <span className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm'>About Us</span>
            <span className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm'>Contact Us</span>
            <span className='mx-5 text-xl font-bold text-white cursor-pointer hover:border-2 hover:border-white hover:rounded-sm'>Review</span>
            <div className='ml-auto mr-10 bg-pink-600 h-18 py-1 px-4 rounded-md cursor-pointer hover:border-2 hover:border-white'>
            <span className='text-xl font-extrabold text-white'>Login</span>
            </div>
            
        </div>
      </div>
    )
  }
}
export default Nav