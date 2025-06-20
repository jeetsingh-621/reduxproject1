import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../../store/actions/Useractions";
import { toast } from "react-toastify";

const Productcard = (props) => {
  const dispatch = useDispatch();
  const { id, image, title, price, index, description } = props;
  const users = useSelector((state) => state.userReducer.users);

  const Addtocarthandler = () => {
    const copyuser = {
      ...users,
      cart: users.cart.map((item) => ({
        product: { ...item.product },
        quantity: item.quantity,
      })),
    };

    const index = copyuser.cart.findIndex((c) => c.product.id === id);
    if (index === -1) {
      copyuser.cart.push({
        product: { id, title, image, price, description },
        quantity: 1,
      });
    } else {
      copyuser.cart[index].quantity += 1;
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
    toast.success("Item added successfully!");
  };

  return (
    <div
      key={index}
      className="w-full max-w-xs md:w-[320px] border border-blue-400 shadow-inner shadow-amber-100 rounded overflow-hidden bg-zinc-800 text-white mx-auto"
    >
      <img
        className="w-full h-[220px] object-contain bg-white"
        src={image || "https://via.placeholder.com/300x220?text=No+Image"}
        alt={title || "No Title"}
      />
      <div className="mt-3 p-4">
        <h1 className="text-base font-bold text-amber-300">
          {title || "No Title"}
        </h1>
        <p className="text-sm text-gray-300 mb-2">
          {(description || "").slice(0, 60)}...
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-sm">Rs. {price ?? "N/A"}</p>
          <button
            onClick={Addtocarthandler}
            className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-sm"
          >
            Add to Cart
          </button>
        </div>

        <Link
          className="block mt-2 text-blue-200 text-sm hover:underline"
          to={`/product/${id}`}
        >
          More info
        </Link>
      </div>
    </div>
  );
};

export default Productcard;
