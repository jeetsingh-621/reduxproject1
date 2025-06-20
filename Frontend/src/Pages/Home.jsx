import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <div className="bg-zinc-900 w-full my-10 border border-amber-300 rounded h-full">
      <div className="p-6 md:p-10 md:py-20 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-7xl font-bold text-center py-6 md:py-10">
          Welcome to <span className="text-orange-400">MyShop</span>
        </h1>

        <p className="w-full md:w-1/2 text-sm md:text-base text-center px-2 md:px-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis fugiat, sequi vero culpa aperiam earum perferendis quo ipsa accusantium, in assumenda maiores reprehenderit id iusto dignissimos itaque quos asperiores cum?
        </p>

        {user ? (
          <button className="bg-blue-900 hover:bg-blue-800 px-6 py-3 my-8 rounded w-3/4 md:w-auto text-white text-base">
            <NavLink to="/products">Shop Now</NavLink>
          </button>
        ) : (
          <button className="bg-blue-900 hover:bg-blue-800 px-6 py-3 my-8 rounded w-3/4 md:w-auto text-white text-base">
            <NavLink to="/login">Shop Now</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
