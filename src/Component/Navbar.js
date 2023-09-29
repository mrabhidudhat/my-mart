import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCart, IoSearch } from "react-icons/io5";
import Logo from "../Asset/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img className="w-14 h-14" src={Logo} alt="Logo" />
        </Link>

        {/* search bar here */}
        <div className="w-1/4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pr-10 rounded-full bg-white text-gray-700 "
          />
          <button
            type="button"
            className="absolute top-0 right-0 pt-3 pr-3 font-bold text-gray-700 hover:text-blue-500 "
          >
            <IoSearch />
          </button>
        </div>
        {/* Hide the menu button on larger screens */}
        <div className="hidden lg:flex space-x-14 text-white">
          <Link className="hover:font-semibold hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:font-semibold hover:underline" to="/about">
            About
          </Link>
          <Link className="hover:font-semibold hover:underline" to="/contactus">
            Contact Us
          </Link>
          <Link className="hover:font-semibold hover:underline" to="/login">
            Login
          </Link>
          <Link className="hover:font-semibold hover:underline" to="/signup">
            Sign Up
          </Link>
          <Link className="hover:text-white-300 text-3xl" to="/cart">
            <IoCart />
          </Link>
        </div>

        {/* Show the menu button on smaller screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            <IoMenuOutline />
          </button>
          <Link className="text-white text-3xl" to="/cart">
            <IoCart />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div>
          <div className="lg:hidden bg-blue-300 text-white">
            <Link
              className="block hover:underline hover:font-semibold py-2 px-4"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block hover:underline hover:font-semibold py-2 px-4"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block hover:underline hover:font-semibold py-2 px-4"
              to="/contactus"
            >
              Contact Us
            </Link>
            <Link
              className="block hover:underline hover:font-semibold py-2 px-4"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="block hover:underline hover:font-semibold py-2 px-4"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
