import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'

const Cart = () => {
  const { cart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="container-custom section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiShoppingCart size={40} className="text-gray-400" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/shop">
            <button className="btn-primary">
              Continue Shopping
            </button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            You have {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
