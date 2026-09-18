import {createContext, useState} from 'react'


export const ShopContext = createContext()

import {PRODUCT_DATA} from '../data'

const ShopContextProvider = ({children}) =>{

  const [products,setProducts] = useState(PRODUCT_DATA)

  return (<ShopContext.Provider value={{products}}>
    {children}
  </ShopContext.Provider>
  )
}


export default ShopContextProvider