import React from 'react';
import ProductGrid from '../components/shop/ProductGrid';
import FilterSidebar from '../components/shop/FilterSidebar';
import SearchBar from '../components/shop/SearchBar';

const Shop = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <aside className="md:w-1/4 p-4">
                <FilterSidebar />
            </aside>
            <main className="md:w-3/4 p-4">
                <SearchBar />
                <ProductGrid />
            </main>
        </div>
    );
};

export default Shop;