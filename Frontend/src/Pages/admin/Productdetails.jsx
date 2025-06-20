import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../../store/actions/Productactions";
import { asyncupdateuser } from "../../../store/actions/Useractions";
import { toast } from "react-toastify";

const Productdetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  const product = products?.find((product) => product.id == id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
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

  // ✅ Add to Cart Handler
  const Addtocarthandler = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const copyuser = {
      ...user,
      cart: user.cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity,
      })),
    };

    const index = copyuser.cart.findIndex((c) => c.product.id === product.id);

    if (index === -1) {
      copyuser.cart.push({
        product: {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          description: product.description,
        },
        quantity: 1,
      });
    } else {
      copyuser.cart[index].quantity += 1;
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
    toast.success("Item added to cart!");
  };

  // ✅ Update Handler
  const updateproducthandler = (data) => {
    dispatch(asyncupdateproduct(id, data));
    toast.success("Product updated!");
  };

  // ✅ Delete Handler
  const deletehandler = () => {
    dispatch(asyncdeleteproduct(id));
    toast.success("Product deleted!");
    navigate("/products");
  };

  return product ? (
    <div className="text-white">
      {/* Product View */}
      <div className="w-full max-w-6xl mt-10 mx-auto bg-gray-900 px-4 md:px-20 py-10 rounded">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          <img
            className="w-full max-w-xs mx-auto md:max-w-[400px] object-contain bg-white rounded"
            src={product.image}
            alt=""
          />
          <div className="mt-3">
            <h1 className="text-2xl md:text-4xl font-bold text-amber-300">
              {product.title}
            </h1>
            <p className="text-sm md:text-md text-justify my-2">
              {product.description}
            </p>
            <p className="text-base md:text-xl my-2">Category: {product.category}</p>
            <div className="mt-6">
              <p className="text-xl md:text-3xl text-green-400">
                Rs. {product.price}
              </p>
              {user && (
                <button
                  onClick={Addtocarthandler}
                  className="bg-blue-700 hover:bg-blue-800 px-6 py-2 mt-4 rounded"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Admin Update Form */}
      {user && user.isadmin && (
        <div className="w-full max-w-4xl mx-auto my-14 bg-gray-900 px-4 md:px-10 py-10 rounded text-white">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-amber-300 underline mb-6">
            Update Product
          </h1>

          <form
            onSubmit={handleSubmit(updateproducthandler)}
            className="flex flex-col gap-4"
          >
            <input
              type="url"
              {...register("image")}
              required
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Image URL"
            />
            <input
              type="text"
              {...register("title")}
              required
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Product Title"
            />
            <input
              type="number"
              {...register("price")}
              required
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Price (e.g. 500)"
            />
            <textarea
              {...register("description")}
              required
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Product Description..."
            ></textarea>
            <input
              type="text"
              {...register("category")}
              required
              className="w-full border-b bg-transparent outline-none py-2"
              placeholder="Category"
            />

            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-700 w-full py-2 rounded text-white"
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={deletehandler}
                className="bg-red-800 hover:bg-red-700 w-full py-2 rounded text-white"
              >
                Delete Product
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  ) : (
    <div className="text-center text-white py-10">Loading...</div>
  );
};

export default Productdetails;
