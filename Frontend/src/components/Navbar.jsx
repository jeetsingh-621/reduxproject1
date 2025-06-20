import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `${isActive ? 'text-orange-400' : 'text-white'} duration-200 text-lg`;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-zinc-900 border border-amber-200 rounded mb-4 relative z-50">
      {/* Top bar (Mobile) */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <h1 className="text-white font-semibold text-xl">MyShop</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center justify-center gap-10 font-semibold text-2xl py-4">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        {user ? (
          <>
            {user?.isadmin && (
              <NavLink to="/admin/create-product" className={navLinkClass}>
                Create Product
              </NavLink>
            )}
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/admin/user-profile" className={navLinkClass}>Profile</NavLink>
            <NavLink to="/cart" className={navLinkClass}>Cart</NavLink>
          </>
        ) : (
          <NavLink to="/login" className={navLinkClass}>Login</NavLink>
        )}
      </div>

      {/* Mobile dropdown menu (just below navbar) */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-start px-4 gap-4 text-lg">
          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          {user ? (
            <>
              {user?.isadmin && (
                <NavLink to="/admin/create-product" onClick={closeMenu} className={navLinkClass}>
                  Create Product
                </NavLink>
              )}
              <NavLink to="/products" onClick={closeMenu} className={navLinkClass}>Products</NavLink>
              <NavLink to="/admin/user-profile" onClick={closeMenu} className={navLinkClass}>Profile</NavLink>
              <NavLink to="/cart" onClick={closeMenu} className={navLinkClass}>Cart</NavLink>
            </>
          ) : (
            <NavLink to="/login" onClick={closeMenu} className={navLinkClass}>Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
