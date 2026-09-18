import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  
  return (
    <div>
      <h2>Our Elegant Collection</h2>
    <div>
      {products.map((product) => {
        const {id,image,title,price} = product
        return(
          <div key={id} className='grid grid-c'>
              <Link to={`/product/${id}`}>
                    <img src={image} alt={title} />
              </Link>
              <div>
                <h4>{title}</h4>
                <p>{price}</p>
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