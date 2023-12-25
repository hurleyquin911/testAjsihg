import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Logo
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu ${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-100`}
      >
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-blue-50 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 text-sm hover:bg-blue-50 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-sm hover:bg-blue-50 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
