import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom'



const Foooter = () => {
  return (
    <div>
        <div>
          <Link to='/' ><span className='text-3xl font-bold cursor-pointer bg-black p-2 rounded-full'>
                                      <span className='text-amber-600 '>Audio</span>
                                      <span className='text-red-700'>Wave</span>
                                </span>
            </Link>
            <p>A South Africa marketplace for high quality headphones and 
              <br></br> premium headphones with experience you can feel
            </p>
            <div>
              <FaXTwitter />
              <FaInstagram />
              <FaFacebook/>
            </div>
        </div>
        <div></div>
        <div></div>

    </div>
  )
}

export default Foooter