import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { RiVisaFill } from "react-icons/ri";
import { IoCardSharp } from "react-icons/io5";



const Footer = () => {
  return (
    <div className='flex flex-col bg-amber-400'>
      <div className='flex flex-col-3 justify-between p-5 items-center '>
        <div className='flex flex-col gap-4 pt-10'>
          <Link to='/'  className='flex justify-center items-center'><span className='flex justify-center text-lg w-[200px] font-bold cursor-pointer bg-black p-2 rounded-full items-center justify-center align-center'>
                                      <span className='text-amber-600 '>Audio</span>
                                      <span className='text-red-700'>Wave</span>
                                </span>
            </Link>
            <p className='text-center'>A South African marketplace for high quality headphones and 
              <br></br> premium headphones with experience you can feel
            </p>
          
            <div className='flex align-center justify-center p-5 items-center gap-8 transition-all duration-500 cursor-pointer ease-in-out'>
              
              <FaXTwitter className='flex duration-300 hover:scale-120  hover:bg-black hover:rounded hover:text-white '/>
              <FaInstagram className='flex duration-300 hover:scale-120  hover:bg-black hover:rounded hover:text-white '/>
              <FaFacebook className='flex duration-300 hover:scale-120  hover:bg-black hover:rounded hover:text-white '/>
              <FaTiktok className='flex duration-300 hover:scale-120  hover:bg-black hover:rounded hover:text-white '/>
              <FaYoutube className='flex duration-300 hover:scale-120  hover:bg-black hover:rounded hover:text-white ' />
              <FaSnapchat className='flex duration-300 hover:scale-120  hover:bg-black hover:rounded hover:text-white '/>
            </div>
        </div>
        <div className='flex flex-col p-4 gap-2 cursor-pointer'>
          <h2 className='font-bold'>EXPLORE</h2>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Discover</p>
          <p>Seller Guide</p>
        </div>
        <div className='flex flex-col p-4 gap-2 cursor-pointer'>
          <h2 className='font-bold'>SUPPORT</h2>
          <p>Help Centre</p>
          <p>Authenticity Privacy</p>
          <p>Returns</p>
          <p>Contact Us</p>
        </div>

      </div>


      <div className='flex justify-between border border-gray-800 p-2 '>
        <div className='cursor-pointer'>
          <p>©2026 AudioWave (Pty)Ltd. All rights reserved.</p>
        </div>
        <div className='flex justify-between gap-3 cursor-pointer'>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
          <p>Cookie Setting</p>
        </div>
        <div className='flex justify-between gap-4 cursor-pointer align-center justify-center'>
          <RiVisaFill className='text-3xl text-blue-600'/>
          <IoCardSharp className='text-2xl text-red-600'/>
        </div>
      </div>
    </div>
  )
}

export default Footer