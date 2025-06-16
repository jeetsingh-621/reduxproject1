import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../../store/actions/Productactions";

const Createproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

 

  const createproducthandler = (product) => {
    product.id = nanoid();
    console.log(product);
    dispatch(asynccreateproduct(product));
    navigate("/products");
  };
  return (
    <div className="w-full bg-zinc-900 my-10 border border-amber-300 rounded h-full">
      <div className="p-10">
        <h1 className="text-5xl text-center font-bold">Create product</h1>

        <div className="form   my-6 w-1/2 mx-auto relative">
          <form
            onSubmit={handleSubmit(createproducthandler)}
            action=""
            className="p-5 flex flex-col items-center justify-center"
          >
            <input
              type="url"
              {...register("image")}
              id="user"
              required
              className="block w-full border-b outline-0 py-2 mb-2"
              placeholder="Image url"
            />
            <input
              type="text"
              {...register("title")}
              id="user"
              required
              className="block w-full border-b outline-0 py-2 mb-2"
              placeholder="title"
            />
            <input
              type="number"
              {...register("price")}
              id="email "
              required
              className="block w-full border-b outline-0 py-2 mb-2"
              placeholder="0.00"
            />
            <textarea
              className="block w-full border-b outline-0 py-2 mb-2"
              {...register("description")}
              placeholder="Enter description here..."
              
            ></textarea>

            <input
              type="text"
              {...register("category")}
              id="user"
              required
              className="block w-full border-b outline-0 py-2 mb-2"
              placeholder="category "
            />

            <button className=" bg-blue-800 my-10 mx-auto py-2 w-1/2">
              Create product
            </button>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createproduct;
