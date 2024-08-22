import React, { Component } from 'react'
import pic from '../images/pic2.png'
import './index.css';

<style>
 
</style>

export class Herosec extends Component {
  render() {
    return (
      <div className='h-[600px] flex '>
        <div className='w-2/3  bg-orange-100  '>
        <div className='flex flex-col justify-center items-center pt-48'>
        <p className=' text-gradient mb-8  text-5xl font-black font-comic'>
            THE PROGRESS OF A NATION 
        </p>
        <p className=' text-gradient mb-8  text-5xl font-black font-comic'>
             WILL BE BLOCKED IF
        </p>
        <p className='text-gradient mb-24  text-5xl font-[900] font-comic'>
         IT'S WOMEN ARE LOCKED
        </p>
        </div>
       <div className='flex flex-col justify-center items-center'>
       <p className='mb-3 text-3xl text2-gradient font-platino font-bold'>
            "Nothing is more important than empathy for another
        </p>
        {/* <p className='mb-3 text-3xl'>
            than empathy for another
        </p> */}
        <p className='text-3xl text2-gradient font-platino font-bold'>
            human being's suffering"
        </p>
       </div>
        </div>
        <div className='bg-orange-100 w-1/3'>
        <img className='ml-auto h-[600px] rounded-l-full object-cover mt-20' src={pic} alt="picture" />
        </div>
      </div>
    )
  }
}
export default Herosec;