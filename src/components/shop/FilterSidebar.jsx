import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { categories } from '../../data/placeholderData'

const FilterSidebar = ({ filters, setFilters, isOpen, onClose }) => {
  const priceRanges = [
    { label: 'Under $500', min: 0, max: 500 },
    { label: '$500 - $1000', min: 500, max: 1000 },
    { label: '$1000 - $2000', min: 1000, max: 2000 },
    { label: '$2000 - $3000', min: 2000, max: 3000 },
    { label: 'Over $3000', min: 3000, max: Infinity }
  ]

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category })
  }

  const handlePriceChange = (range) => {
    setFilters({ ...filters, priceRange: range })
  }

  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: { min: 0, max: Infinity },
      sortBy: 'popularity'
    })
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        className="fixed lg:static top-0 left-0 h-full lg:h-auto w-80 bg-white z-50 lg:z-0 overflow-y-auto p-6 lg:p-0"
      >
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={onClose} className="p-2">
            <FiX size={24} />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category.id} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category.slug}
                  onChange={() => handleCategoryChange(category.slug)}
                  className="mr-3 text-primary focus:ring-primary"
                />
                <span className="text-gray-700">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  checked={
                    filters.priceRange.min === range.min &&
                    filters.priceRange.max === range.max
                  }
                  onChange={() => handlePriceChange(range)}
                  className="mr-3 text-primary focus:ring-primary"
                />
                <span className="text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearFilters}
          className="w-full btn-secondary text-sm"
        >
          Clear All Filters
        </button>
      </motion.div>
    </>
  )
}

export default FilterSidebar
