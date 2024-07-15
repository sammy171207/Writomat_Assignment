import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/user/1" 
              className="hover:text-gray-300 transition duration-300 ease-in-out"
            >
              User Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
