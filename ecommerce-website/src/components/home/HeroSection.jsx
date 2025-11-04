import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-gray-800 text-white">
            <img src="path/to/your/featured-image.jpg" alt="Hero" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold">Welcome to [Your Store Name]</h1>
                <p className="mt-4 text-lg">Discover our exclusive collection of [product type]</p>
            </div>
        </div>
    );
};

export default HeroSection;