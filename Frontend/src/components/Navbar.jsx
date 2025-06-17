import React from 'react'
import {  useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const user =  useSelector((state)=>state.userReducer.users);

  return (
    <div  className='flex bg-zinc-900 border border-amber-200 rounded mb-4 py-4 items-center justify-center gap-30 font-semibold text-2xl'>

        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200"} to="/" >Home</NavLink>

      {user ? <>
      {user && user?.isadmin&& <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200" } to="/admin/create-product" >Create product</NavLink>
}
        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200" } to="/products" >Products</NavLink>
        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200" } to="/admin/user-profile" >Profile</NavLink>
       

      </> :<>
        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200"} to="/login" >Login</NavLink>

      </>}
     

    </div>
  )
}

export default Navbar