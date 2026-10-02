import React from 'react'
import BannerImg from '../assets/bennerImg.jpg'

const Banner = () => {
  return (
    <div className='flex flex-col justify-center items-center font-serif pb-7'>
      <h2 className='flex text-6xl font-bold align-center justify-center pt-6 text-red-700'>Unleash Pure Sound</h2>
      <p className='flex align-center justify-center mb-6 pt-2 text-2xl text-align:center text-gray-500 mx-auto text-center'>Premium Headphones engineered for immersive audio, all-day comfort,<br></br>
         and an experience you can feel.</p>
      <img src={BannerImg} alt='' className=' h-[550px] w-[720px] rounded-md'/>
    </div>
  )
}

export default Banner