import React from 'react';

const ProductInfo = ({ product }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg text-gray-700">${product.price}</p>
            <p className="mt-2 text-gray-600">{product.shortDescription}</p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-gray-600">{product.longDescription}</p>
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">Buy Now</button>
            </div>
        </div>
    );
};

export default ProductInfo;