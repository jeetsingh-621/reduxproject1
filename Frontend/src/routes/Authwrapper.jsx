import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Authwrapper = (props) => {
    // useNavigate();
 const {users}= useSelector((state)=>state.userReducer);

  return users?props.children : <Navigate to='/login'/>
}

export default Authwrapper