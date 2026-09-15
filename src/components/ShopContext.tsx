import {createContext, useContext, useState} from 'react'

export const ShopContext = createContext()

import {PRODUCT_DATA} from '../data'

const ShopContextProvider = ({children}) =>{

  const [products,setProducts] = useState(PRODUCT_DATA)

  return <ShopContextProvider value={{products}}>
    {children}
  </ShopContextProvider>
}


export default ShopContextProvider