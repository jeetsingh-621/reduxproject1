import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Cart from '../Pages/Cart';
import Createproduct from '../Pages/admin/Createproduct';
import Productdetails from '../Pages/admin/Productdetails';
import { useSelector } from 'react-redux';
import Userprofile from '../Pages/user/Userprofile';
import Pagenotfound from '../Pages/Pagenotfound';
import Authwrapper from './Authwrapper';

const Mainroutes = () => {
//  console.log(users);
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>

        
        <Route path='/admin/create-product' element={<Authwrapper><Createproduct/> </Authwrapper>}/>
        <Route path='/admin/user-profile' element={ <Authwrapper><Userprofile/></Authwrapper>}/>
        <Route path='/product/:id' element={<Authwrapper><Productdetails/></Authwrapper>}/>
        


        <Route path='*' element={<Pagenotfound/>}/>

    </Routes>
  )
}

export default Mainroutes