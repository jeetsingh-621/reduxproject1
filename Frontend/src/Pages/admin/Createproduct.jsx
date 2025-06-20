import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../../store/actions/Productactions";

const Createproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createproducthandler = (product) => {
    product.id = nanoid();
    dispatch(asynccreateproduct(product));
    navigate("/products");
  };

  return (
    <div className="w-full bg-zinc-900 my-10 border border-amber-300 rounded h-full text-white">
      <div className="p-4 md:p-10">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Create Product
        </h1>

        <div className="form my-6 w-full md:w-1/2 mx-auto">
          <form
            onSubmit={handleSubmit(createproducthandler)}
            className="p-4 flex flex-col items-center justify-center"
          >
            <input
              type="url"
              {...register("image")}
              required
              className="block w-full border-b bg-transparent outline-0 py-2 mb-4"
              placeholder="Image URL"
            />
            <input
              type="text"
              {...register("title")}
              required
              className="block w-full border-b bg-transparent outline-0 py-2 mb-4"
              placeholder="Title"
            />
            <input
              type="number"
              {...register("price")}
              required
              className="block w-full border-b bg-transparent outline-0 py-2 mb-4"
              placeholder="Price (e.g. 999)"
            />
            <textarea
              {...register("description")}
              required
              className="block w-full border-b bg-transparent outline-0 py-2 mb-4"
              placeholder="Enter description..."
            ></textarea>
            <input
              type="text"
              {...register("category")}
              required
              className="block w-full border-b bg-transparent outline-0 py-2 mb-4"
              placeholder="Category"
            />

            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 text-white py-2 w-full md:w-1/2 mt-6 rounded"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createproduct;
