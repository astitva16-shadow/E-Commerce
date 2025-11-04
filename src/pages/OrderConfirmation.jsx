import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiMail, FiPackage } from 'react-icons/fi'
import Button from '../components/common/Button'

const OrderConfirmation = () => {
  const { orderId } = useParams()

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FiCheckCircle className="text-green-500" size={48} />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <div className="card p-8 mb-8 text-left">
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Order Number</h3>
                <p className="text-2xl font-bold text-primary">{orderId}</p>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-900 mb-1">Estimated Delivery</h3>
                <p className="text-gray-600">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMail className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Confirmation Email Sent</h4>
                  <p className="text-sm text-gray-600">
                    We've sent a confirmation email with your order details.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiPackage className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Track Your Order</h4>
                  <p className="text-sm text-gray-600">
                    You'll receive tracking information once your order ships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile">
              <Button variant="primary">View Order Details</Button>
            </Link>
            <Link to="/shop">
              <Button variant="secondary">Continue Shopping</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderConfirmation
