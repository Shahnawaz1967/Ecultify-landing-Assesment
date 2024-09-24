import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <nav className="flex justify-between items-center bg-gray-200 p-4 shadow-lg fixed top-0 w-full z-10">
      {/* Logo linking to the Home section */}
      <div className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors duration-300">
        <Link 
          to="start" // This links to the Home section
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Ecultify
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-grow justify-center space-x-8">
        <li>
          <Link 
            to="features" 
            smooth={true} 
            duration={500} 
            className="text-2xl text-green-800 hover:text-green-600 transition-colors duration-300 py-20 cursor-pointer"
          >
            Features
          </Link>
        </li>
        <li>
          <Link 
            to="testimonials" 
            smooth={true} 
            duration={500} 
            className="text-2xl text-green-800 hover:text-green-600 transition-colors duration-300 py-20 cursor-pointer"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link 
            to="products" 
            smooth={true} 
            duration={500} 
            className="text-2xl text-green-800 hover:text-green-600 transition-colors duration-300 py-20 cursor-pointer"
          >
            Products
          </Link>
        </li>
      </ul>

      <div className="flex space-x-4 m-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
          Sign Up
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-300">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-green-800 hover:text-green-600 transition-colors duration-300 cursor-pointer"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link 
              to="features" 
              smooth={true} 
              duration={500} 
              className="text-2xl text-green-800 hover:text-green-600 transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)} // Close menu on item click
            >
              Features
            </Link>
          </li>
          <li>
            <Link 
              to="testimonials" 
              smooth={true} 
              duration={500} 
              className="text-2xl text-green-800 hover:text-green-600 transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)} // Close menu on item click
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link 
              to="products" 
              smooth={true} 
              duration={500} 
              className="text-2xl text-green-800 hover:text-green-600 transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)} // Close menu on item click
            >
              Products
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
