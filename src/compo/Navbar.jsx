import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProductHunt, FaPhone, FaUser, FaUserPlus } from 'react-icons/fa';
import { useTheme } from '../compo/ThemeContext'; // استيراد useTheme

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="flex flex-wrap place-items-start">
      <section className="relative w-full">
        <nav className={`flex justify-between ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} w-full fixed top-0 left-0 z-10 shadow-md`}>
          <div className="px-3 xl:px-6 py-2 flex w-full items-center justify-between">
            <Link className="text-2xl font-serif font-bold" to="/">Logo Here.</Link>
            <div className="hidden md:flex space-x-8 mx-auto">
              <Link className="flex items-center text-lg" to="/">
                <FaHome className="mr-2" /> Home
              </Link>
              <Link className="flex items-center text-lg" to="/about">
                <FaInfoCircle className="mr-2" /> About
              </Link>
              <Link className="flex items-center text-lg" to="/product">
                <FaProductHunt className="mr-2" /> Product
              </Link>
              <Link className="flex items-center text-lg" to="/contact">
                <FaPhone className="mr-2" /> Contact Us
              </Link>
              <Link className="flex items-center text-lg" to="/profile">
                <FaUser className="mr-2" /> Profile
              </Link>
              <Link className="flex items-center text-lg" to="/register">
                <FaUserPlus className="mr-2" /> Register
              </Link>
            </div>
            <button className="ml-4" onClick={toggleDarkMode}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button className="xl:hidden ml-auto" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className={`md:hidden p-3 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <Link className="flex items-center py-1 text-lg hover:text-gray-600" to="/">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link className="flex items-center py-1 text-lg hover:text-gray-600" to="/about">
              <FaInfoCircle className="mr-2" /> About
            </Link>
            <Link className="flex items-center py-1 text-lg hover:text-gray-600" to="/product">
              <FaProductHunt className="mr-2" /> Product
            </Link>
            <Link className="flex items-center py-1 text-lg hover:text-gray-600" to="/contact">
              <FaPhone className="mr-2" /> Contact Us
            </Link>
            <Link className="flex items-center py-1 text-lg hover:text-gray-600" to="/profile">
              <FaUser className="mr-2" /> Profile
            </Link>
            <Link className="flex items-center py-1 text-lg hover:text-gray-600" to="/register">
              <FaUserPlus className="mr-2" /> Register
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
