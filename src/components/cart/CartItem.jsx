import { motion } from 'framer-motion'
import { FiX, FiMinus, FiPlus } from 'react-icons/fi'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex gap-4 bg-white p-4 rounded-lg shadow-sm"
    >
      {/* Image */}
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Info */}
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Quantity */}
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <FiMinus size={16} />
            </button>
            <span className="px-4 py-2 font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <FiPlus size={16} />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">
              ${item.price} each
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CartItem
