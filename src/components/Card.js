import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import NewsLetterForm from './NewsLetterForm';


function Card() {
  return (
    <div className='grid grid-cols-2 m-16 bg-white p-10 gap-5 rounded-3xl md:grid-cols-1 md:grid-rows-2 md:gap-0 md:p-0'>
      <div className='md:pt-3 md:pb-8 px-8 text-[#242742]'>
        <h1 className='text-4xl font-bold py-7 md:p-0'>Stay updated!</h1>
        <h1 className='text-sm'>Join 60,000+ product managers receiving monthly updates on:</h1>
        <div className='text-sm py-5 md:py-3'>
          <p className=''>Product discovery and building what matters</p>    
          <p className='py-2'>Measuring to ensure updates are a success</p>
          <p className=''>And much more!</p>
        </div>
        <NewsLetterForm/>
      </div>
      <div class="left-side bg-black md:h-"></div>
    </div>
  )
}

export default Card