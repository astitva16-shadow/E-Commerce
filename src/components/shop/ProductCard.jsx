import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="card group"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.tags?.includes('bestseller') && (
              <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">
                Bestseller
              </span>
            )}
            {product.tags?.includes('new') && (
              <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Sale
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-4 right-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white p-2 rounded-full shadow-md hover:bg-accent hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <FiHeart size={18} />
            </motion.button>
          </div>

          {/* Add to Cart Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <FiShoppingCart size={18} />
              Add to Cart
            </button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-1">{product.category}</div>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <FiStar className="text-yellow-400 fill-current" size={14} />
              <span className="text-sm text-gray-700 ml-1">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProductCard
