import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route } from 'react-router-dom'
import Homepage from './pages/Cart/Homepage'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './pages/Footer'

function App() {
  
  return (
    <div>
    <Navbar />        
     <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<Product/>} />

     </Routes>
     <Footer/>
    </div>
  )
}
export default App
