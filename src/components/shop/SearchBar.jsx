import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
      />
    </div>
  )
}

export default SearchBar
