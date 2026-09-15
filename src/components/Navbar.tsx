import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-stone-800 p-[1.4rem] cursor-pointer'>
        <Link to='/' ><span className='text-3xl font-bold cursor-pointer'>
                            <span className='text-amber-600'>Audio</span>
                            <span className='text-red-700'>Wave</span>
                      </span>
        </Link>
        <div>
          <ul className='flex justify-between gap-8 font-semibold cursor-pointer'>
            <li className='font-bold text-lg text-white '>HOME</li>
            <Link to='//pages/Cart'><h2 className='font-bold text-lg text-white '>CART(0)</h2></Link>
            <li className='font-bold text-lg text-white '>PRODUCTS</li>
            <li className='font-bold text-lg text-white '>CONTACTS</li>
          </ul>
        </div>
      </nav>
        
    </div>
  )
}

export default Navbar