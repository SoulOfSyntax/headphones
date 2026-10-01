import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  
  return (
    <div className=''>
      <h2 className='font-bold text-5xl p-3 items-center flex justify-center'>Our Elegant Collection</h2>
    <div className='grid grid-cols-3 gap-4 p-4'>
      {products.map((product) => {
        const {id,image,title,price} = product
        return(
          <div key={id} className='flex flex-col  items-center justify-center pt-2 border bg-gray-200 border-gray-300 rounded-md'>
              <Link to={`/product/${id}`}>
                    <img src={image} alt={title} className='h-[250px] w-[250px] rounded transition-all duration-300 ease-in-out hover:scale-105'/>
              </Link>
              <div className='flex flex-col items-center justify-between object-cover pb-2'>
                <h4 className=' items-center'>{title}</h4>
                <p className='font-bold text-xl'>R{price}</p> <button className='border w-[250px] rounded  cursor-pointer hover:text-white hover:border-gray-300 border-black hover:bg-green-600 transition-all duration-300 ease-in-out'>Add to Cart</button>
               
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