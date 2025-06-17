import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../../store/actions/Useractions';

const Userprofile = () => {
  

  const users = useSelector((state) => state.userReducer.users);
  // console.log(users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch("password");


   useEffect(() => {
    if (users) {
      reset({
        username: users.username,
        email: users.email,
        password: users.password,
        confirmpassword: users.confirmpassword,
      });
    }
  }, [users, reset]);

  const updateuserhandler = (user) => {
    // console.log(user);
    dispatch(asyncupdateuser(users.id, user));
    // navigate("/products");
  };

  const deletehandler =()=>{
    dispatch(asyncdeleteuser(users.id))
    navigate("/login");
  }
   const logoutuserhandler =()=>{
    dispatch(asynclogoutuser())
    navigate("/login");
  }

  return (users? <div>
     <div>
    <h1 className='text-7xl font-medium text-gray-600'>{users.username}</h1>
    <h1 className='text-2xl text-gray-500 font-medium my-4'>{users.email}</h1>
    </div>
    <hr className='my-10'/>
     <div className="right w-[70vw] mx-auto my-14 overflow-auto py-10 bg-gray-900 px-20">
        <h1 className="text-center text-4xl font-bold text-amber-300 underline">
          Update profile
        </h1>
        <form
          onSubmit={handleSubmit(updateuserhandler)}
          action=""
          className="p-5 flex flex-col items-center justify-center"
        >
          <input
            type="text"
            {...register("username")}
            required
            className="block w-full border-b outline-0 py-2 mb-2"
            placeholder="John-doe"
          />
          <input
            type="email"
            {...register("email")}
            required
            className="block w-full border-b outline-0 py-2 mb-2"
            placeholder="john@doe.com"
          />
          <input
            type="password"
            {...register("password")}
            id="password "
            required
            className="block w-full border-b outline-0 py-2 mb-2"
            placeholder="******"
          />
        

          <input
            type="password"
            {...register("confirmpassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value == password || "password do not match",
              })}
            id="confirmpassword"
            required
            className="block w-full border-b outline-0 py-2 mb-2"
            placeholder="*******" 
          />
            <p style={{ color: "red" }}>{errors.confirmpassword?.message}</p> 


          <button className=" bg-blue-800 mt-10 mx-auto py-2 w-1/2">
            Update User
          </button>
          <button type="button" onClick={logoutuserhandler} className=" bg-red-500 mt-6 mx-auto py-2 w-1/2">
            logout User  
          </button>
            <button type="button" onClick={deletehandler} className=" bg-red-800 mt-6 mx-auto py-2 w-1/2">
            Delete User  
          </button>
           
        </form>
      </div>
      </div>
    
  :<h1 className='text-4xl text-amber-300 text-center'>loading...</h1>)
}

export default Userprofile;