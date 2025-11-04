import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext)

  if (cart.length === 0) {
    return <Navigate to="/cart" />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const orderId = 'ORD-' + Date.now()
    clearCart()
    window.location.href = `/order-confirmation/${orderId}`
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom section-padding">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
          Checkout
        </h1>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                required
                className="input-field"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
