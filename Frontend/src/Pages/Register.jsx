import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { asyncregisteruser } from "../../store/actions/Useractions";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate =  useNavigate();

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
    dispatch(asyncregisteruser(user));
    navigate("/login");
  };
  return (
    <div className="w-full bg-zinc-900 my-10 border border-amber-300 rounded h-full">
      <div className="p-10">
        <h1 className="text-5xl text-center font-bold">Register</h1>

        <div className="form   my-6 w-1/2 mx-auto relative">
          <form
            onSubmit={handleSubmit(registerhandler)}
            action=""
            className="p-5 flex flex-col items-center justify-center"
          >
            <input
              type="text"
              {...register("username", { required: "Name is required" })}
              id="user"
              required
              className="block w-full border-b outline-0 py-2 mb-2"
              placeholder="username"
            />
            <p style={{ color: "red" }}>{errors.username?.message}</p>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              id="email "
              required
              className="block w-full border-b outline-0 py-2 mb-2"
              placeholder="Email"
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              id="password"
              required
              className="block w-full border-b outline-0 py-2"
              placeholder="Password"
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <input
              type="password"
              {...register("confirmpassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value == password || "password do not match",
              })}
              required
              id="confirmpassword"
              className="block w-full border-b outline-0 py-2"
              placeholder="Confirm Password"
            />
            <p style={{ color: "red" }}>{errors.confirmpassword?.message}</p> 

            <button className=" bg-blue-800 my-10 mx-auto py-2 w-1/2">
              Register
            </button>

            <p className="text-lg">
              you have an account please{" "}
              <span className="text-blue-600">
                <NavLink to="/login">Login</NavLink>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
