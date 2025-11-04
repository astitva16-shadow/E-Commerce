import React from 'react';

const OrderConfirmation = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-lg mb-2">Your order has been successfully placed.</p>
            <p className="text-lg mb-6">You will receive a confirmation email shortly.</p>
            <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Return to Home
            </a>
        </div>
    );
};

export default OrderConfirmation;