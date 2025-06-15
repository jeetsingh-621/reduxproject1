import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes';
 import { ToastContainer } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";
import { asynccurrentuser } from '../store/actions/Useractions';
import { useDispatch } from 'react-redux';

const App = () => {


  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(asynccurrentuser());
},[]);
  
  return (
    <div className='w-screen min-h-screen relative h-full bg-black text-white py-4 px-10'>
      <ToastContainer  position='top-right' autoClose={3000}/>
      <Navbar/>
      <Mainroutes/>

      </div>
  )
}

export default App