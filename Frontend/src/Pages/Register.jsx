import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { asyncregisteruser } from "../../store/actions/Useractions";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const registerhandler = (user) => {
    user.id = nanoid();
    user.isadmin = false;
    user.cart = [];
    dispatch(asyncregisteruser(user));
    navigate("/login");
  };

  return (
    <div className="w-full bg-zinc-900 my-10 border border-amber-300 rounded h-full text-white">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-6">
          Register
        </h1>

        <div className="form w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit(registerhandler)}
            className="p-4 flex flex-col gap-4"
          >
            {/* Username */}
            <input
              type="text"
              {...register("username", { required: "Name is required" })}
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Username"
            />
            <p className="text-red-400 text-sm">{errors.username?.message}</p>

            {/* Email */}
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Email"
            />
            <p className="text-red-400 text-sm">{errors.email?.message}</p>

            {/* Password */}
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Password"
            />
            <p className="text-red-400 text-sm">{errors.password?.message}</p>

            {/* Confirm Password */}
            <input
              type="password"
              {...register("confirmpassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Confirm Password"
            />
            <p className="text-red-400 text-sm">
              {errors.confirmpassword?.message}
            </p>

            <button className="bg-blue-800 hover:bg-blue-700 w-full py-2 rounded mt-6">
              Register
            </button>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <NavLink to="/login" className="text-blue-400 hover:underline">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
