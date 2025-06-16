import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { asynclogoutuser } from '../../store/actions/Useractions';

const Navbar = () => {

  const user =  useSelector((state)=>state.userReducer.users);

 const dispatch =useDispatch();
  const navigate =useNavigate();
  const logouthandler =()=>{
    dispatch(asynclogoutuser());
    navigate("/");
  }
  // console.log(user);
  return (
    <div  className='flex bg-zinc-900 border border-amber-200 rounded mb-4 py-4 items-center justify-center gap-30 font-semibold text-2xl'>

        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200"} to="/" >Home</NavLink>
        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200"} to="/products" >Products</NavLink>

      {user ? <>
        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200" } to="/admin/create-product" >Create product</NavLink>
        <button className='' onClick={logouthandler}>logout</button>

      </> :<>
        <NavLink className={(e)=>e.isActive && "text-orange-400 duration-200"} to="/login" >Login</NavLink>

      </>}
     

    </div>
  )
}

export default Navbar