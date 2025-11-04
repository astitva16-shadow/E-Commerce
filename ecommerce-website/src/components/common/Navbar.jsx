import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">Your Store Name</Link>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                    <Link to="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
                    <Link to="/cart" className="text-gray-600 hover:text-gray-800">Cart</Link>
                    <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;