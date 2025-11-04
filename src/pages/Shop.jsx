import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiFilter, FiGrid, FiList } from 'react-icons/fi'
import ProductGrid from '../components/shop/ProductGrid'
import FilterSidebar from '../components/shop/FilterSidebar'
import SearchBar from '../components/shop/SearchBar'
import { products } from '../data/placeholderData'

const Shop = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: { min: 0, max: Infinity },
    sortBy: 'popularity'
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid')

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === filters.category)
    }

    // Filter by price
    filtered = filtered.filter(
      p => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
    )

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return filtered
  }, [filters, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Shop Our Collection
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our exquisite range of handcrafted jewelry pieces
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden w-full btn-primary mb-4 flex items-center justify-center gap-2"
              >
                <FiFilter size={20} />
                Filters
              </button>
              <div className="hidden lg:block">
                <FilterSidebar
                  filters={filters}
                  setFilters={setFilters}
                  isOpen={true}
                  onClose={() => {}}
                />
              </div>
            </div>
          </div>

          {/* Mobile Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="w-full md:w-96">
                  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="hidden md:flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-600'} rounded-l-lg transition-colors`}
                    >
                      <FiGrid size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-600'} rounded-r-lg transition-colors`}
                    >
                      <FiList size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setFilters({
                      category: 'all',
                      priceRange: { min: 0, max: Infinity },
                      sortBy: 'popularity'
                    })
                    setSearchQuery('')
                  }}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
