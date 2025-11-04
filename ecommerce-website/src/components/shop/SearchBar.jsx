import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                className="border rounded-l-md p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r-md p-2">
                Search
            </button>
        </form>
    );
};

export default SearchBar;