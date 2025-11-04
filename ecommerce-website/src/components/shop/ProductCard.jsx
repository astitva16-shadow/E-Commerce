import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-500 mt-1">{product.shortDescription}</p>
            <div className="mt-4">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
                    Add to Cart
                </button>
                <button className="bg-green-500 text-white rounded-md px-4 py-2 ml-2 hover:bg-green-600">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;