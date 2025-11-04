import React from 'react';

const FilterSidebar = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
            <div className="mb-4">
                <h3 className="font-medium">Categories</h3>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Category 1
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Category 2
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Category 3
                        </label>
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="font-medium">Price Range</h3>
                <input type="range" min="0" max="100" className="w-full" />
            </div>
            <div>
                <h3 className="font-medium">Sort By</h3>
                <select className="w-full p-2 border rounded">
                    <option value="popularity">Popularity</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSidebar;