import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-gray-800">
                    Your Store Name
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="text-gray-600 hover:text-gray-800">Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="text-gray-600 hover:text-gray-800">Cart</Link>
                        </li>
                        <li>
                            <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;