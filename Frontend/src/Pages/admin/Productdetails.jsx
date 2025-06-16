import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncdeleteproduct, asyncupdateproduct } from "../../../store/actions/Productactions";

const Productdetails = () => {
  const { id } = useParams();

  // console.log(id);
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  const product = products?.find((product) => product.id == id);
  console.log(product);
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

   useEffect(() => {
    if (product) {
      reset({
        image: product.image,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
      });
    }
  }, [product, reset]);

  const updateproducthandler = (product) => {
    console.log(product);
    dispatch(asyncupdateproduct(id, product));
    // navigate("/products");
  };

  const deletehandler =()=>{
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  }

  return product ? (
    <div>
      <div className="w-[85vw] mt-10 mx-auto bg-gray-900 px-20 py-10">
        <div className="w-full flex  gap-40 p-4">
          <img
            className="max-w-[400px] w-full h-1/2 object-cover"
            src={product.image}
            alt=""
          />
          <div className="mt-3">
            <h1 className="text-4xl font-bold text-amber-300">
              {product.title}
            </h1>
            <p className="text-md text-justify  my-2">{product.description} </p>
            <p className="text-xl text-justify  my-2">{product.category} </p>
            <div className=" items-center justify-between">
              <p className="my-8 text-3xl text-green-400">
                Rs. {product.price}
              </p>
              {/* <Link to=''>more info</Link> */}
              <button className="bg-blue-700 px-6 py-1 mt-3 items-center">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

    {user && user.isadmin &&   <div className="right w-[70vw] mx-auto my-14 overflow-auto py-10 bg-gray-900 px-20">
        <h1 className="text-center text-4xl font-bold text-amber-300 underline">
          Update product
        </h1>
        <form
          onSubmit={handleSubmit(updateproducthandler)}
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
            className="block w-full overflow-auto border-b outline-0 py-2 mb-2"
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
            Update product
          </button>
            <button type="button" onClick={deletehandler} className=" bg-red-800 my-10 mx-auto py-2 w-1/2">
            Delete product
          </button>
        </form>
      </div>}
    
    </div>
  ) : (
    "loading..."
  );
};

export default Productdetails;
