import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { asyncloginuser } from '../../store/actions/Useractions';
import { useDispatch } from 'react-redux';

const Login = () => {

   const dispatch = useDispatch();
   const navigate =useNavigate();
  const{register,reset,handleSubmit }= useForm() ;
  const loginhandler =(user)=>{
    dispatch( asyncloginuser(user));
    navigate("/");
  }
  return (
    <div className='w-full bg-zinc-900 my-10 border border-amber-300 rounded h-full'>
      <div className='p-10'>
    <h1 className='text-5xl text-center font-bold'>Login</h1>

    <div className="form   my-10 w-1/2 mx-auto relative">
    <form action="" onSubmit={handleSubmit(loginhandler)} className='p-5 flex flex-col items-center justify-center'>
    <input type="text" {...register("email")} id='user' className='block w-full border-b outline-0 py-2 mb-2' placeholder='john@doe.com' />
    <input type="password" {...register("password")} id='password' className='block w-full border-b outline-0 py-2' placeholder='Password' />
    <button className=' bg-blue-800 my-10 mx-auto py-2 w-1/2'>Login</button>

    <p className='text-lg'>Don't have an account? <span className='text-blue-600'><NavLink to='/register'>Register</NavLink></span></p>
    </form>

    </div>
      </div>
    </div>
  )
}

export default Login