import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../../store/actions/Useractions';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const cart = users?.cart || [];

  if (!users) {
    return (
      <div className="text-white text-center mt-10">Loading your cart...</div>
    );
  }

  const updateCartQuantity = (productId, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1) return item;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    const updatedUser = { ...users, cart: updatedCart };
    dispatch(asyncupdateuser(users.id, updatedUser));
  };

  const removeFromCart = (productId) => {
    const updatedCart = users.cart.filter(
      (item) => item.product.id !== productId
    );
    const updatedUser = { ...users, cart: updatedCart };
    dispatch(asyncupdateuser(users.id, updatedUser));
    toast.success('Item removed!');
  };

  const getTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.product.price, 0);

  return (
    <div className="w-full max-w-5xl mx-auto my-10 p-5 bg-zinc-900 border border-amber-300 rounded">
      <h2 className="text-2xl font-bold text-white mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-white text-lg">Cart is empty 😞</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-4 bg-zinc-800 p-4 rounded shadow"
            >
              {/* Product image */}
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-24 h-24 object-contain rounded bg-white"
              />

              {/* Product info */}
              <div className="flex-1 text-white text-center md:text-left">
                <h3 className="text-lg font-semibold">{item.product.title}</h3>
                <p className="text-sm text-gray-400">
                  {item.product.description.slice(0, 50)}...
                </p>
              </div>

              {/* Quantity controls */}
              <div className="flex flex-col items-center text-white">
                <p className="text-sm">Price: ₹{item.product.price}</p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => updateCartQuantity(item.product.id, -1)}
                    className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
                  >
                    −
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.product.id, 1)}
                    className="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
                <p className="font-bold mt-2">
                  Total: ₹{item.product.price * item.quantity}
                </p>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Grand total */}
          <div className="text-right text-white text-xl font-bold border-t pt-4">
            Grand Total: ₹{getTotal()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
