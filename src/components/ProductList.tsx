import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  return (
    <div>ProductList</div>
  )
}

export default ProductList