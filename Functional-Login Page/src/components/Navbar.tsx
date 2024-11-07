import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6" />
          <span className="text-xl font-bold">FitTracker</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;