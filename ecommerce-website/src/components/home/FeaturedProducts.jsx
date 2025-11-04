import React from 'react';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: 'Product 1',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'Product 2',
            price: '$39.99',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Product 3',
            price: '$49.99',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            title: 'Product 4',
            price: '$59.99',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
                        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.title}</h3>
                            <p className="text-gray-700">{product.price}</p>
                            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;