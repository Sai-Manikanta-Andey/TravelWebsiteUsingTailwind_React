import React from 'react'
import {AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'


const TopBox = () => {
  return (
    <div className="flex justify-between  items-center px-4 py-2">
      <div>
        <h1 className="text-xl font-bold text-gray-700">VACAWAY</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-4">
          <AiOutlineClockCircle size={20} className='mx-2 text-[var(--primary-dark)]'  />
          <p className='text-sm to-gray-700' >9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-4">
          <AiFillPhone size={20}   className='mx-2 text-[var(--primary-dark)]' />
          <p className='text-sm to-gray-700' >+91-99595-629889</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
}

export default TopBox;