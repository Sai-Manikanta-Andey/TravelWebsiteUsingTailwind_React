import React from 'react'

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4 ">Gallery</h2>
      <div>
        <div className="grid sm:grid-cols-5 gap-4">
          <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-f
             h-full object-cover' src="./unsplash3.jpg" alt="img" />
          </div>
          <div >
            <img className='w-f
             h-full object-cover'  src="./unsplash5.jpg" alt="img" />
          </div>
          <div>
            <img className='w-f
             h-full object-cover' src="./unsplash2.jpg" alt="img" />
          </div>
          <div>
            <img className='w-f
             h-full object-cover' src="./unsplash7.jpg" alt="img" />
          </div>
          <div>
            <img className='w-f
             h-full object-cover' src="./unsplash6.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery