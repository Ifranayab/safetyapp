import React, { Component } from 'react'
import pic from '../images/pic.png'

export class Herosec extends Component {
  render() {
    return (
      <div className='h-[600px] flex '>
        <div className='w-2/3  bg-orange-100  '>
        <div className='flex flex-col justify-center items-center pt-36'>
        <p className='  mb-3  text-4xl'>
            The progress of a nation will be blocked
        </p>
        <p className=' mb-20 text-4xl'>
            if it's women are locked.
        </p>
        </div>
       <div className='flex flex-col justify-center items-center'>
       <p className='mb-3 text-3xl'>
            "Nothing is more important
        </p>
        <p className='mb-3 text-3xl'>
            than empathy for another
        </p>
        <p className='text-3xl'>
            human being's suffering"
        </p>
       </div>
        </div>
        <div className='bg-orange-100 w-1/3'>
        <img className='ml-auto h-[600px] rounded-l-full object-cover' src={pic} alt="picture" />
        </div>
      </div>
    )
  }
}
export default Herosec;