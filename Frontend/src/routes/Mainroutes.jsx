import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Cart from '../Pages/Cart';
import Createproduct from '../Pages/admin/Createproduct';
import Productdetails from '../Pages/admin/Productdetails';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/admin/create-product' element={<Createproduct/>}/>
        <Route path='/product/:id' element={<Productdetails/>}/>

    </Routes>
  )
}

export default Mainroutes