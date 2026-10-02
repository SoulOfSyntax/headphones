import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  
  return (
    <div className=''>
      <h2 className='font-semibold text-6xl p-3 items-center flex justify-center font-mono pt-5 text-red-700 pb-7'>Our Elegant Collection</h2>
    <div className='grid grid-cols-3 gap-4 p-4'>
      {products.map((product) => {
        const {id,image,title,price} = product
        return(
          <div key={id} className='flex flex-col  items-center justify-center pt-2 border bg-gray-200 border-gray-300 rounded-md'>
              <Link to={`/product/${id}`}>
                    <img src={image} alt={title} className='h-[250px] pt-2 w-[250px] rounded rounded-xl transition-all duration-300 ease-in-out hover:scale-110'/>
              </Link>
              <div className='flex flex-col items-center justify-between object-cover pt-2 pb-2'>
                <h4 className=' items-center'>{title}</h4>
                <p className='font-bold text-xl'>R{price}</p> <button className='border border-gray-400 w-[220px] h-[40px] hover:scale-115 hover:duration-500 rounded  cursor-pointer hover:text-white hover:border-gray-300 border-black hover:bg-red-700 transition-all duration-300 ease-in-out'>Add to Cart</button>
               
              </div>
          </div>
        )
      })

      }
    </div>
    </div>
  )
}

export default ProductList