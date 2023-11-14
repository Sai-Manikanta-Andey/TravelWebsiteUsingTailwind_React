import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-[92vh] ">
      <img
        src="./heroimg.jpg"
        alt="hero"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className='absolute top-[40%] left-[0%] md:[50%] max-w-600px  flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>The Dream Trip</h1>
          <h2 className='text-3xl py-4'>With Vacaway</h2>
          <p >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
            natus? Ad eaque sapiente, adipisci facilis inventore, nobis nostrum
            culpa nemo deserunt ducimus dolor atque minus sed cum dolore quod
            repellendus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero