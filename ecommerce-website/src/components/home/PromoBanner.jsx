import React from 'react';

const PromoBanner = () => {
    return (
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Seasonal Sale!</h2>
            <p className="mt-2">Get 20% off on all products. Use code: SALE20</p>
            <button className="mt-4 bg-white text-blue-500 font-semibold py-2 px-4 rounded">
                Shop Now
            </button>
        </div>
    );
};

export default PromoBanner;