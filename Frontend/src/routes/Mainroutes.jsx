import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Cart = lazy(()=>import("../Pages/Cart"));
const Authwrapper = lazy(()=>import("./Authwrapper"));
const Pagenotfound = lazy(()=>import("../Pages/Pagenotfound"));
const Userprofile = lazy(()=>import("../Pages/user/Userprofile"));
const Productdetails = lazy(()=>import("../Pages/admin/Productdetails"));
const Createproduct = lazy(()=>import("../Pages/admin/Createproduct"));
const Register = lazy(()=>import("../Pages/Register"));
const Login = lazy(()=>import("../Pages/Login"));
const Products = lazy(()=>import("../Pages/Products"));
const Home = lazy(()=>import("../Pages/Home"));

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
        <Route path='/cart' element={<Authwrapper><Cart/></Authwrapper>}/>
        


        <Route path='*' element={<Pagenotfound/>}/>

    </Routes>
  )
}

export default Mainroutes