import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from '../../../store/actions/Useractions';

const Userprofile = () => {
  const users = useSelector((state) => state.userReducer.users);
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
    dispatch(asyncupdateuser(users.id, user));
  };

  const deletehandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
  };

  const logoutuserhandler = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
  };

  return users ? (
    <div className="text-white px-4 md:px-10 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-semibold text-amber-400">{users.username}</h1>
        <p className="text-md md:text-xl text-gray-400 mt-2">{users.email}</p>
      </div>

      <hr className="my-8 border-amber-200" />

      <div className="max-w-3xl mx-auto bg-gray-900 rounded px-4 md:px-10 py-10">
        <h2 className="text-center text-3xl font-bold text-amber-300 underline mb-8">Update Profile</h2>

        <form
          onSubmit={handleSubmit(updateuserhandler)}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            {...register("username")}
            required
            className="w-full border-b bg-transparent outline-none py-2"
            placeholder="John Doe"
          />
          <input
            type="email"
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
          <input
            type="password"
            {...register("confirmpassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            required
            className="w-full border-b bg-transparent outline-none py-2"
            placeholder="Confirm Password"
          />
          {errors.confirmpassword && (
            <p className="text-red-500 text-sm">{errors.confirmpassword.message}</p>
          )}

          <button className="bg-blue-700 hover:bg-blue-800 w-full py-2 rounded text-white mt-6">
            Update User
          </button>

          <button
            type="button"
            onClick={logoutuserhandler}
            className="bg-yellow-600 hover:bg-yellow-700 w-full py-2 rounded text-white mt-4"
          >
            Logout User
          </button>

          <button
            type="button"
            onClick={deletehandler}
            className="bg-red-700 hover:bg-red-800 w-full py-2 rounded text-white mt-4"
          >
            Delete User
          </button>
        </form>
      </div>
    </div>
  ) : (
    <h1 className="text-4xl text-amber-300 text-center py-20">Loading...</h1>
  );
};

export default Userprofile;
