import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] w-full m-auto md:flex mt-[-75px] '>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50% ] font-bold text-white text-2xl'>Resorts</h3>


        <img className='w-full h-full object-cover  relative border-4 border-white shadow-lg' src="./unsplash1.jpg" alt="ad" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50% ] font-bold text-white text-2xl'>Resorts</h3>
        <img className='w-full h-full object-cover  relative border-4 border-white shadow-lg' src="./unsplash.jpg" alt="ad" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50% ] font-bold text-white text-2xl '>Resorts</h3>
        <img className='w-full h-full object-cover  relative border-4 border-white shadow-lg' src="./unsplash1.jpg" alt="ad" />
      </div>
    </div>
  );
}

export default Activities