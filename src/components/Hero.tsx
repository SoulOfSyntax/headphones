import React from 'react'
import backGround from '../assets/main.jpg'

const Hero = () => {
  return (
    <div className='relative w-full h-[110vh] bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${backGround})`}}>
      <div className='relative z-20 flex flex-col items-center justify-center h-full text-stone-800 px-4 text-center'>
        <h1 className='text-4xl md:text-6xl mb-1 font-bold -mt-28'>Less Noise</h1>
        <h1 className='text-4xl md:text-6xl mb-4 font-bold'>More Music</h1>
        <p className='text-lg md:text-2xl text-amber-600 font-semibold mb-2'>Block out the noise and get lost in the sound you love.</p>
        <button className='bg-red-700 text-lg px-4 py-2 font-semibold text-white rounded-lg'>Shop Collection</button>
      </div>
    </div>
  )
}

export default Hero