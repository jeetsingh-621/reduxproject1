import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-red-400 mb-6 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-300 text-center mb-10">
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink
        to="/"
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md"
      >
        Go to Home
      </NavLink>
    </div>
  );
};

export default Pagenotfound;
