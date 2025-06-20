import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { asyncloginuser } from '../../store/actions/Useractions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const loginhandler = (user) => {
    dispatch(asyncloginuser(user));
    navigate('/');
  };

  return (
    <div className="w-full bg-zinc-900 my-10 border border-amber-300 rounded h-full text-white">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-6">Login</h1>

        <div className="form w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit(loginhandler)}
            className="p-4 flex flex-col gap-4"
          >
            <input
              type="text"
              {...register("email")}
              required
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="john@doe.com"
            />

            <input
              type="password"
              {...register("password")}
              required
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Password"
            />

            <button className="bg-blue-800 hover:bg-blue-700 w-full py-2 rounded mt-6">
              Login
            </button>

            <p className="text-center mt-4 text-sm">
              Don't have an account?{' '}
              <NavLink to="/register" className="text-blue-400 hover:underline">
                Register
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
