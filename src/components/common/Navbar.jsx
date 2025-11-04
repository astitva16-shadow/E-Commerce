import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch, FiHeart } from 'react-icons/fi'
import { AuthContext } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const { getCartCount, setIsCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Astitva
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Shop
            </Link>
            <button className="text-gray-700 hover:text-primary transition-colors font-medium">
              Collections
            </button>
            <button className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <FiSearch size={20} />
            </button>

            {/* Wishlist */}
            <button className="hidden md:block text-gray-700 hover:text-primary transition-colors">
              <FiHeart size={20} />
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate('/cart')}
              className="relative text-gray-700 hover:text-primary transition-colors"
            >
              <FiShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
              >
                <FiUser size={20} />
                <span className="font-medium">Login</span>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container-custom py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <button className="block text-gray-700 hover:text-primary transition-colors font-medium">
                Collections
              </button>
              <button className="block text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </button>
              {!user && (
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
